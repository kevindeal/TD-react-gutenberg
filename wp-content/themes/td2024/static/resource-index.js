class ResourceFilter {
  
    constructor(el,post_type,resource_type=false,taxonomy,id,otherFilters=[],search=false) {

        this.el = el;
        
        this.elements = {
            button: el.querySelector('[role="combobox"]'),
            dropdown: el.querySelector('[role="listbox"]'),
            options: el.querySelectorAll('[role="option"]')
        }

        this.id = id;
        this.taxonomy = taxonomy;
        this.post_type = post_type;
        this.resource_type = resource_type;
        this.search_field = document.querySelector("#resource-search");
        this.otherFilters = otherFilters;
        this.initialOption = this.elements.options[0];

        this.isDropdownOpen = false;
        this.currentOptionIndex = 0;
        this.lastTypedChar = '';
        this.lastMatchingIndex = 0;
        this.value = 0;

        this.keyPressHandler = this.handleKeyPress.bind(this);
        this.documentClickHandler = this.handleDocumentInteraction.bind(this);
        this.buttonClickHandler = this.handleButtonClick.bind(this);
        this.optionClickHandler = this.handleOptionClick.bind(this);
        this.closeClickHandler = this.closeClick.bind(this);
        
        this.elements.button.addEventListener('keydown', this.keyPressHandler);
        this.elements.button.addEventListener('click', this.buttonClickHandler);
        this.elements.options.forEach(option=>{
            option.addEventListener("click", this.optionClickHandler);
        });

        const active = el.querySelector(".active")
        if(active) {
            this.setValue(active);
            this.initialOption = active;
        }

        this.initialContent = jQuery('#resources-container').html();
        this.initialPagination = jQuery('#resources-container').parent().find(".pagination").html();

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

    initialState() {
        this.setValue(this.initialOption);
    }

    resetContent() {
        this.populateContent(this.initialContent);
        jQuery('#resources-container').parent().find(".pagination").html(this.initialPagination);
        this.assignPaginationActions();
    }

    handleKeyPress(params) {
        const { key } = event;
        const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' '];

        if (!this.isDropdownOpen && openKeys.includes(key)) {
            event.preventDefault();
            this.toggleDropdown();
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

    setValueByTermID(term_id) {
        this.elements.options.forEach((option, index) => {
            if(option.dataset.value == term_id)
                this.setValue(option);
        });
    }

    selectCurrentOption() {
        const selectedOption = this.elements.options[this.currentOptionIndex];
        this.selectOptionByElement(selectedOption);
    }

    selectOptionByElement(optionElement) {
        this.setValue(optionElement);
        this.toggleDropdown();
        
        const s = this.search_field ? this.search_field.value : null;
        this.filterResources(this.post_type,this.taxonomy,optionElement.dataset.value,1,s);
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
        this.value = optionElement.dataset.value;

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

    setPage(page) {
        
    }

    paginate(page) {
        const s = this.search_field ? this.search_field.value : null;
        this.filterResources(this.post_type,this.taxonomy,this.el.dataset.value,page,s);
    }

    populateContent(markup) {
        jQuery('#resources-container').html(markup);
    }

    populatePagination(result) {
        document.querySelectorAll("[data-next],[data-prev]").forEach($Element=>$Element.classList.remove("disabled"));
        jQuery('#resources-container').parent().find(".pagination").html(result.pagination);
        this.assignPaginationActions(result.page, result.taxonomy);
    }

    assignPaginationActions(page=1,taxonomy=this.taxonomy,term_id=this.value) {
        console.log(page,taxonomy,term_id);
        jQuery('#resources-container').parent().find(".pagination .page-numbers").each((i,el)=>{
            if(el.classList.contains("next")) {
                el.setAttribute("data-page",parseInt(page) + 1);
            }else if(el.classList.contains("prev")) {
                el.setAttribute("data-page",parseInt(page) - 1);
            }else {
                el.setAttribute("data-page", el.textContent);
            }
        });
        jQuery('#resources-container').parent().find(`.pagination`).attr("data-taxonomy", taxonomy).attr("data-term-id", term_id);

        jQuery('#resources-container').parent().find('.pagination .page-numbers').off("click").click(e=>{
            e.preventDefault();
            let activeFilter = filters[0];
            filters.forEach((filter,i)=>{
                if(parseInt(filter.el.dataset.value)!=0)
                    activeFilter = filter
            });
            if(activeFilter) {
                activeFilter.paginate(e.currentTarget.dataset.page);
            }
        });
    }

    filterResources(post_type='resources',taxonomy,term_id,page=1,s=false) {

        let _this = this;
        let data = {
            'action': 'filter_resources',
            'term_id': term_id,
            'taxonomy': taxonomy,
            'paged': page,
            'post_type': post_type,
            'resource_type': this.resource_type
        };

        if(s)
            data.s = s;

        const otherFilters = this.otherFilters;

        console.log(data);

        jQuery.ajax({
            type: 'POST',
            url: app.ajaxurl,
            data: data,
            success: function(data) {

                otherFilters.map(filter=>{
                    filter.reset();
                });

                const result = JSON.parse(data);
                console.log("URL", result);
                _this.populateContent(result.markup);
                _this.populatePagination(result);

                if(result.url && parseInt(result.page) <= 1) {
                    window.history.pushState(result, '', result.url);
                }

            },
            error: function(qXHR,status,error) {
                console.log("error",status,error);
            }
        });

    }

}



class IndexPaginator {

    constructor(el,post_types=[],per_page=null,page=1) {
        this.el = el;
        this.parent = this.el.parentNode;
        this.page = page;
        this.per_page = per_page;
        this.post_types = post_types;
        this.setPaginationElements();
        this.setActions();
    }

    setPaginationElements() {
        this.pagination = {
            "wrapper": this.parent.querySelector(".pagination"),
            "all": this.parent.querySelectorAll("a.page-numbers"),
            "numbers": this.parent.querySelectorAll("a.page-numbers:not(.prev):not(.next)"),
            "prev": this.parent.querySelector("a.prev"),
            "next": this.parent.querySelector("a.next")
        }
    }

    setActions(page=1) {

        this.onSuccess = this.updateContent.bind(this);

        if(this.pagination.next)
            this.pagination.next.dataset.page = parseInt(this.page) + 1;
        
        if(this.pagination.prev)
            this.pagination.prev.dataset.page = parseInt(this.page) - 1;

        if(this.pagination.numbers) {
            this.pagination.numbers.forEach(number=>{
                number.dataset.page = number.textContent;
            });
        }

        this.pagination.all.forEach(item=>{
            item.addEventListener("click", e=>{
                e.preventDefault();
                this.getContent(item.dataset.page);
            });
        });
    }

    updateContent(data) {
        const result = JSON.parse(data);
        this.page = result.page;
        this.el.innerHTML = result.markup;
        this.updatePaginationMarkup(result.pagination);
        this.setPaginationElements();
        this.setActions();
    }

    updatePaginationMarkup(markup) {
        this.pagination.wrapper.innerHTML = markup;
    }

    getContent(page=1) {

        let data = {
            'action': 'filter_resources',
            'paged': page,
            'post_type': this.post_types,
            'term_id': 0,
            'posts_per_page': this.per_page
        };

        jQuery.ajax({
            type: 'POST',
            url: app.ajaxurl,
            data: data,
            success: this.onSuccess,
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
    const filter = new ResourceFilter(select, select.dataset.post_type, select.dataset.resource_type, select.dataset.taxonomy, i, otherFilters);
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

const $Pagination = document.querySelector("#resources-container + .pagination");
if($Pagination) {

    const $PaginationLinks = $Pagination.querySelectorAll(".page-numbers");
    const paged = $Pagination.dataset.paged ? parseInt($Pagination.dataset.paged) + 1 : 1;

    $PaginationLinks.forEach($Link => {

        $Link.dataset.page = $Link.textContent;

        if($Link.classList.contains("next")) {
            $Link.dataset.page = paged + 1;
        }

        if($Link.classList.contains("prev")) {
            $Link.dataset.page = paged - 2;
        }

        $Link.addEventListener("click", e => {
            e.preventDefault();
            const page = e.currentTarget.dataset.page ?? 0;
            let activeFilter = filters[0];
            filters.forEach((filter,i)=>{
                if(parseInt(filter.el.dataset.value)!=0)
                    activeFilter = filter
            });
            if(activeFilter) {
                activeFilter.paginate(page);
            }
        });

    });
}

const async_pagination_elements = []
const $AsyncPaginationElements = document.querySelectorAll("[data-async_pages]");
$AsyncPaginationElements.forEach($Element=>{
    async_pagination_elements.push(new IndexPaginator($Element,$Element.dataset.async_pages,$Element.dataset.per_page));
});

window.addEventListener('popstate', function(e){
    console.log(e);
    if(e.state) {
        console.log("here");
        if(e.state.taxonomy && e.state.term_id) {
            filters.forEach(filter=> {
                if(filter.taxonomy == e.state.taxonomy) {
                    console.log("!!!",filter);
                    filter.populateContent(e.state.markup);
                    filter.populatePagination(e.state);
                    filter.setValueByTermID(e.state.term_id);
                }
            })
        }else{
            filters.map(filter=>{
                filter.reset();
            });
            filters[0].paginate(0);
        }

    }else{
        if(filters.count) {
            filters.map(filter=>{
                filter.initialState();
            });
            filters[0].resetContent();
        }
    }
 }); 