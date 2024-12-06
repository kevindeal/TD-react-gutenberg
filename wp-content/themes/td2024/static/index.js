class ResourceFilter {
  
    constructor(el,taxonomy,id,otherFilters=[],search=false) {

        this.el = el;
        
        this.elements = {
            button: el.querySelector('[role="combobox"]'),
            dropdown: el.querySelector('[role="listbox"]'),
            options: el.querySelectorAll('[role="option"]')
        }

        this.id = id;
        this.taxonomy = taxonomy;
        this.search_field = document.querySelector("#resource-search");
        this.otherFilters = otherFilters;

        this.isDropdownOpen = false;
        this.currentOptionIndex = 0;
        this.lastTypedChar = '';
        this.lastMatchingIndex = 0;

        this.keyPressHandler = this.handleKeyPress.bind(this);
        this.documentClickHandler = this.handleDocumentInteraction.bind(this);
        this.buttonClickHandler = this.handleButtonClick.bind(this);
        this.optionClickHandler = this.handleOptionClick.bind(this);
        this.closeClickHandler = this.closeClick.bind(this);
        
        this.elements.button.addEventListener('keydown', this.keyPressHandler);
        this.elements.button.addEventListener('click', this.buttonClickHandler);
        this.elements.options.forEach(option=>{
            option.addEventListener("click", this.optionClickHandler);
        })
        //document.addEventListener('click', this.documentClickHandler);

    }

    closeClick(event) {
        const outsideClick = !this.el.contains(event.target);
        if(outsideClick) {
            this.toggleDropdown();
        }
    }

    reset() {
        this.currentOptionIndex = 0;
        this.setValue(this.elements.options[0]);
    }

    handleKeyPress(params) {
        console.log("this key press", this);
        const { key } = event;
        const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' '];

        if (!this.isDropdownOpen && openKeys.includes(key)) {
            event.preventDefault();
            this.toggleDropdown();
            console.log("nope");
        } else if (this.isDropdownOpen) {
            event.preventDefault();
            switch (key) {
            case 'Escape':
                this.toggleDropdown();
                break;
            case 'ArrowDown':
                this.moveFocusDown();
                break;
            case 'ArrowUp':
                this.moveFocusUp();
                break;
            case 'Enter':
            case ' ':
                this.selectCurrentOption();
                break;
            default:
                // Handle alphanumeric key presses for mini-search
                console.log("another key");
                this.handleAlphanumericKeyPress(key);
                break;
            }
        }
    }

    toggleDropdown() {
        
        this.elements.dropdown.classList.toggle('active');
        this.isDropdownOpen = !this.isDropdownOpen;
        this.elements.button.setAttribute('aria-expanded', this.isDropdownOpen.toString());

        if (this.isDropdownOpen) {
            this.focusCurrentOption();
            document.addEventListener('click', this.closeClickHandler);
        } else {
            this.elements.button.focus();
            document.removeEventListener('click', this.closeClickHandler);
        }

    }

    handleButtonClick(event) {
        this.toggleDropdown();
    }

    handleOptionClick(event) {
        this.selectOptionByElement(event.target);
    }

    handleDocumentInteraction(event) {
        const isClickInsideButton = this.elements.button.contains(event.target);
        const isClickInsideDropdown = this.elements.dropdown.contains(event.target);

        if (isClickInsideButton || (!isClickInsideDropdown && this.isDropdownOpen)) {
            this.toggleDropdown();
        }

        // Check if the click is on an option
        const clickedOption = event.target.closest('[role="option"]');
        
        if (clickedOption) {
            this.selectOptionByElement(clickedOption);
        }
    }

    moveFocusDown() {
        if (this.currentOptionIndex < this.elements.options.length - 1) {
            this.currentOptionIndex++;
        } else {
            this.currentOptionIndex = 0;
        }
        this.focusCurrentOption();
    }

    moveFocusUp() {
        if (this.currentOptionIndex > 0) {
            this.currentOptionIndex--;
        } else {
            this.currentOptionIndex = this.elements.options.length - 1;
        }
        this.focusCurrentOption();
    }

    focusCurrentOption() {

        const currentOption = this.elements.options[this.currentOptionIndex];
        console.log("current", this.elements.options[this.currentOptionIndex]);
        const optionLabel = currentOption.textContent;

        currentOption.classList.add('current');
        currentOption.focus();
 
        currentOption.scrollIntoView({
            block: 'nearest',
        });

        this.elements.options.forEach((option, index) => {
            if (option !== currentOption) {
                option.classList.remove('current');
            }
        });

    }

    selectCurrentOption() {
        console.log("select current option", this.currentOptionIndex);
        const selectedOption = this.elements.options[this.currentOptionIndex];
        this.selectOptionByElement(selectedOption);
    }

    selectOptionByElement(optionElement) {
        console.log("select option by element", this);

        this.setValue(optionElement);
        this.toggleDropdown();
        
        const s = this.search_field ? this.search_field.value : null;
        this.filterResources(this.taxonomy,optionElement.dataset.value,1,s);
    }

    setValue(optionElement) {

        const optionValue = optionElement.textContent;

        this.elements.button.closest(".customSelect").dataset.value = optionElement.dataset.value;
        this.elements.button.dataset.value = optionElement.dataset.value;
        this.elements.button.textContent = optionValue;
        this.elements.options.forEach(option => {
            option.classList.remove('active');
            option.setAttribute('aria-selected', 'false');
        });

        optionElement.classList.add('active');
        optionElement.setAttribute('aria-selected', 'true');

    }

    handleAlphanumericKeyPress(key) {

        const typedChar = key.toLowerCase();
        
        if (this.lastTypedChar !== typedChar) {
            this.lastMatchingIndex = 0;
        }

        const matchingOptions = Array.from(this.elements.options).filter((option) =>
            this.option.textContent.toLowerCase().startsWith(typedChar)
        );

        if (matchingOptions.length) {
            if (this.lastMatchingIndex === matchingOptions.length) {
                this.lastMatchingIndex = 0;
            }
            let value = matchingOptions[lastMatchingIndex]
            const index = Array.from(this.elements.options).indexOf(value);
            this.currentOptionIndex = index;
            this.focusCurrentOption();
            this.lastMatchingIndex += 1;
        }

        this.lastTypedChar = typedChar;

    }

    paginate(page) {
        const s = this.search_field ? this.search_field.value : null;
        this.filterResources(this.taxonomy,this.el.dataset.value,page,s);
    }

    filterResources(taxonomy,term_id,page=1,s=false) {

        let data = {
            'action': 'filter_resources',
            'term_id': term_id,
            'taxonomy': taxonomy,
            'paged': page
        };

        if(s)
            data.s = s;

        const otherFilters = this.otherFilters;

        jQuery.ajax({
            type: 'POST',
            url: app.ajaxurl,
            data: data,
            success: function(data) {

                console.log(otherFilters);

                otherFilters.map(filter=>{
                    filter.reset();
                });

                const result = JSON.parse(data);
                jQuery('#resources-container').html(result.markup);
                document.querySelectorAll("[data-next],[data-prev]").forEach($Element=>$Element.classList.remove("disabled"));

                jQuery(".pagination .page-numbers").remove();

                if(result.total > 0 && result.pages > 1) {
                
                    if(!result.is_first_page) {
                        jQuery(".pagination").append(`<a href='#' class='prev page-numbers' data-page='${parseInt(result.page)-1}'><svg width="50" height="31" viewBox="0 0 50 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.9888 29.8096L1.58333 15.1954M1.58333 15.1954L15.9888 0.582797M1.58333 15.1954L49.25 15.1954" stroke="#131023" stroke-width="1.31652" stroke-miterlimit="10"></path>
    </svg></a>`);
                    }

                    for(let i=1; i<=result.pages; i++) {
                        jQuery(".pagination").append(`<a href='#' class='page-numbers' data-page='${i}'>${i}</a>`);
                    }
                    
                    if(!result.is_last_page) {
                        jQuery(".pagination").append(`<a href='#' class='next page-numbers' data-page='${parseInt(result.page)+1}'><svg width="49" height="31" viewBox="0 0 49 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.3667 0.583008L47.7721 15.1972M47.7721 15.1972L33.3667 29.8098M47.7721 15.1972H0.105469" stroke="#131023" stroke-width="1.31652" stroke-miterlimit="10"></path>
    </svg></a>`);
                    }

                    jQuery(`.pagination .page-numbers[data-page='${result.page}']:not(.prev):not(.next)`).addClass("current");
                    jQuery(`.pagination`).attr("data-taxonomy", result.taxonomy).attr("data-term-id", result.term_id);

                    jQuery('.pagination .page-numbers').click(e=>{
                        e.preventDefault();
                        filters.forEach((filter,i)=>{
                            if(parseInt(filter.el.dataset.value)!=0)
                                filter.paginate(e.currentTarget.dataset.page);
                        });
                    });

                }
                
            },
            error: function(qXHR,status,error) {
                console.log("error",status,error);
            }
        });

    }

}


const customSelectFields = document.querySelectorAll(".customSelect");
const filters = [];
customSelectFields.forEach((select,i)=>{
    const otherFilters = Array.from(customSelectFields);
    otherFilters.splice(i,1);
    const filter = new ResourceFilter(select, select.dataset.taxonomy, i, otherFilters);
    filters.push(filter);
});

filters.map((filter,i)=>{
    let otherFilters = [...filters]
    otherFilters.splice(i,1);
    filter.otherFilters = otherFilters;
});

const $Search = document.querySelector("#resource-search");
if($Search) {
    $Search.addEventListener("keyup", e => {
        event.preventDefault();
        const { key } = event;
        if(key == "Enter") {
            let activeFilter = filters[0];
            filters.forEach((filter,i)=>{
                if(parseInt(filter.el.dataset.value)!=0)
                    activeFilter = filter
            });
            if(activeFilter) {
                activeFilter.paginate(1);
            }
        }
    });
}