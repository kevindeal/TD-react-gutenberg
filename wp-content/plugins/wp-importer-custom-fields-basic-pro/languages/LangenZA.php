<?php
/******************************************************************************************
 * Copyright (C) Smackcoders. - All Rights Reserved under Smackcoders Proprietary License
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * You can contact Smackcoders at email address info@smackcoders.com.
 *******************************************************************************************/

namespace Smackcoders\CFCSV;

if ( ! defined( 'ABSPATH' ) )
exit; // Exit if accessed directly

class LangEN_ZA {
        private static $en_ZA_instance = null , $media_instance;

        public static function getInstance() {
            if (LangEN_ZA::$en_ZA_instance == null) {
                    LangEN_ZA::$en_ZA_instance = new LangEN_ZA;
                    return LangEN_ZA::$en_ZA_instance;
            }
            return LangEN_ZA::$en_ZA_instance;
        }

        public static function contents(){
                $response = array('ImportUpdate' => 'Invoer Update',
                        'Dashboard' => 'Dashboard',
                        'Manager' => 'Bestuurder',
                        'Export' => 'Uitvoer',
                        'Settings' => 'Instellings',
                        'Support' => 'Ondersteuning',
                        'UploadfromDesktop' => 'Laai van die Lessenaar',
                        'UploadfromFTPSFTP' => 'Oplaai van FTP, SFTP',
                        'UploadfromURL' => "Laai vanaf URL",
                        'ChoosFileintheServer' => 'Kies die Lêer in die Bediener',
                        'Drag&Dropyourfilesor' => 'Sleep & Drop jou lêers of',
                        'Browse' => 'Blaai',
                        'NewItem' => 'Nuwe Item',
                        'Import' => 'Invoer',
                        'Update' => 'Update',
                        'ImportUpdates' => 'Invoer-Update',
                        'ExistingItems' => 'Bestaande Items',
                        'ImportEachRecordAs'=> 'Die Invoer Van Elke Rekord As',
                        'Continue' => 'Gaan voort',
                        'Search' => 'Soek',
                        'FromDate' => 'Vanaf Die Datum',
                        'ToDate' => 'Tot Op Datum',
                        'SEARCH' => 'SOEK',
                        'SavedTemplate' => 'Gered Sjabloon',
                        'TEMPLATES' => 'TEMPLATES',
                        'MATCHEDCOLUMNSCOUNT' => 'OOREENSTEM MET KOLOMME TEL',
                        'MODULE' => 'MODULE',
                        'CREATEDTIME' => 'GESKEP TYD',
                        'ACTION' => 'AKSIE',
                        'USETEMPLATE' => 'GEBRUIK DIE SJABLOON',
                        'CREATENEWMAPPING' => 'DIE SKEP VAN NUWE KARTERING',
                        'BACK' => 'TERUG',
                        'SIMPLEMODE' => 'EENVOUDIGE MODUS',
                        'ADVANCEDMODE' => 'GEVORDERDE AF',
                        'DRAGDROPMODE' => 'SLEEP & DROP AF',
                        'WordpressFields' => 'Wordpress Velde',
                        'WPFIELDS' => 'WP Velde',
                        'CSVHEADER' => 'CSV Kop',
                        'Action' => 'Aksie',
                        'Name' => 'Naam',
                        'HINT' => 'WENK',
                        'Example' => 'Voorbeeld',
                        'WordPressCoreFields' => 'WordPress Kern Velde',
                        'ACFFreeFields' => 'ACF Vrye Velde',
                        'ACFFields' => 'ACF Velde',
                        'ACFImageMetaFields' => 'ACF Beeld Meta Velde',
                        'ACFGroupFields' => 'ACF Groep Velde',
                        'ACFProFields' => 'ACF Pro Velde',
                        'ACFRepeaterFields' => 'ACF Herhaler Velde',
                        'ACFFlexibleFields' => 'ACF Buigsaam Velde',
                        'JobListingFields' => 'Job Listing Fields',
                        'TypesCustomFields' => 'Tipes Pasgemaakte Velde',
                        'TypesImageMetaFields' => 'Tipes Beeld Meta Velde',
                        'PodsFields' => 'Peule Velde',
                        'PodsImageMetaFields' => 'Peule Beeld Meta Velde',
                        'CustomFieldSuite' => 'Pasgemaakte Veld Suite',
                        'AllInOneSeoFields' => 'Alles In Een Seo Velde',
                        'MetaBoxFields' => 'MetaBox-velde',
                        'MetaBoxRelationFields' => 'MetaBoxRelatieVelden',
                        'YoastSeoFields' => 'Yoast Seo Velde',
                        'RankMathFields' => 'Rank Math Velde',
                        'RankMathProFields'=>'Rank Math Pro Velde',
                        'BillingAndShippingInformation' => 'Faktuur en Gestuur Inligting',
                        'CustomFieldsWPMemberFields' => 'Pasgemaakte Velde WP Lid Velde',
                        'CustomFieldsMemberFields' => 'Pasgemaakte Velde Lid Velde',
                        'ProductMetaFields' => 'Produk Meta Velde',
                        'ProductAttrFields' => 'Produk Attribute Velde',
                        'ProductImageMetaFields' => 'Produk Gallery Meta Velde',
                        'OrderMetaFields' => 'Om Meta Velde',
                        'CouponMetaFields' => 'Coupon Meta Velde',
                        'RefundMetaFields' => 'Terugbetaling Meta Velde',
                        'WPECommerceCustomFields' => 'WP ECommerce Pasgemaakte Velde',
                        'EventsManagerFields' => 'Gebeure Bestuurder Velde',
                        'NextGENGalleryFields' => 'NextGEN Gallery Velde',
                        'WPMLFields' => 'WPML Velde',
                        'CMB2CustomFields' => 'CMB2 Pasgemaakte Velde',
                        'JetEngineFields' => 'Jet Enjin Velde',
                        'JetEngineRFFields' => 'Jet Enjin Herhaler Velde',
                        'JetEngineCPTFields' => 'Jet Enjin CPT Velde',
                        'JetEngineCPTRFFields' => 'Jet Enjin CPT Herhaler Velde',
                        'JetEngineCCTFields' => 'Jet Enjin CCT Velde',
                        'JetEngineCCTRFFields' => 'Jet Enjin CCT Herhaler Velde',
                        'CourseSettingsFields' => 'Natuurlik Instellings Velde',
                        'CurriculumSettingsFields' => 'Kurrikulum Instellings Velde',
                        'QuizSettingsFields' => 'Quiz Instellings Velde',
                        'LessonSettingsFields' => 'Les Instellings Velde',
                        'QuestionSettingsFields' => 'Vraag Instellings Velde',
                        'OrderSettingsFields' => 'Om Die Instellings Velde',
                        'replyattributesfields' => 'Antwoord Eienskappe Velde',
                        'forumattributesfields' => 'Forum Eienskappe Velde',
                        'topicattributesfields' => 'Onderwerp Eienskappe Velde',
                        'polylangfields'=>'Polylang Instellings Velde',
                        'WordPressCustomFields' => 'WordPress Pasgemaakte Velde',
                        'DirectoryProFields' => 'Gids Pro Velde',
                        'TermsandTaxonomies' => 'Terme en Taksonomieë',
                        'IsSerialized' => 'Is Serialized',
                        'NoCustomFieldsFound' => 'Geen Persoonlike Velde Gevind', 
                        'MediaUploadFields' => 'Media Oplaai Velde',
                        'UploadMedia' => 'Laai Media',
                        'UploadedListofFiles' => 'Opgelaai Lys van Lêers',
                        'UploadedMediaFileLists' => 'Opgelaai Media Lêer Lyste',
                        'SavethismappingasTemplate' => 'Red hierdie kartering as Sjabloon',
                        'Save' => 'Red',
                        'Doyouneedtoupdatethecurrentmapping' => 'Doen wat jy nodig het om te werk om die huidige kartering ?',
                        'Savethecurrentmappingasnewtemplate' => 'Spaar die huidige kartering as nuwe sjabloon',
                        'Back' => 'Terug',
                        'Size' => 'Grootte',
                        'MediaHandling' => 'Media Hantering',
                        'Downloadexternalimagestoyourmedia' => 'Aflaai eksterne beelde om jou media',
                        'ImageHandling' => 'Beeld Hantering',
                        'Usemediaimagesifalreadyavailable' => 'Die gebruik van media beelde as wat reeds beskikbaar is',
                        'Doyouwanttooverwritetheexistingimages' => 'Doen wat jy wil om te vervang die bestaande beelde',
                        'ImageSizes' => 'Beeld Groottes',
                        'Thumbnail' => 'Miniatuur',
                        'Medium' => 'Medium',
                        'MediumLarge' => 'Medium Groot',
                        'Large' => 'Groot',
                        'Custom' => 'Persoonlike',
                        'Slug' => 'Slug',
                        'Width' => 'Breedte',
                        'Height' => 'Hoogte',
                        'Addcustomsizes' => 'Voeg persoonlike groottes',
                        'PostContentImageOption' => 'Post Inhoud Van Die Beeld Opsie',
                        'DownloadPostContentExternalImagestoMedia' => 'Aflaai Post Inhoud Eksterne Beelde Media',
                        'MediaSEOAdvancedOptions' => 'Media SEO & Gevorderde Opsies',
                        'SetimageTitle' => 'Stel die beeld Titel',
                        'SetimageCaption' => 'Stel die beeld-Opskrif',
                        'SetimageAltText' => 'Stel die beeld Alt Teks',
                        'SetimageDescription' => 'Stel beeld Beskrywing',
                        'Changeimagefilenameto' => 'Verander die beeld-lêer naam te',
                        'ImportconfigurationSection' => 'Invoer opset Afdeling',
                        'EnablesafeprestateRollback' => 'In staat stel om veilig prestate Terugrol',
                        'Backupbeforeimport' => 'Rugsteun voor die invoer',
                        'DoyouwanttoSWITCHONMaintenancemodewhileimport' => 'Doen wat jy wil om te SKAKEL OP die Onderhoud af, terwyl die invoer',
                        'Doyouwanttohandletheduplicateonexistingrecords' => 'Wil jy om te hanteer die duplikaat op die bestaande rekords',
                        'Mentionthefieldswhichyouwanttohandleduplicates' => 'Noem die velde wat jy wil om te hanteer duplikate',
                        'DoyouwanttoUpdateanexistingrecords' => "Doen wat jy wil om te Werk van'n bestaande rekords",
                        'Updaterecordsbasedon' => 'Update rekords wat gebaseer is op',
                        'DoyouwanttoSchedulethisImport' => 'Wil jy te Skeduleer hierdie Invoer',
                        'ScheduleDate' => 'Skedule Datum',
                        'ScheduleFrequency' => 'Skedule Frekwensie',
                        'TimeZone' => 'Tyd Sone',
                        'ScheduleTime' => 'Tyd Skedule',
                        'Schedule' => 'Skedule',
                        'Import' => 'Begin Invoer',
                        'Scheduled' => 'Geskeduleer',
                        'Format' => 'Formaat',
                        'OneTime' => 'Eenmalige',
                        'Daily' => 'Daaglikse',
                        'Weekly' => 'Weeklikse',
                        'Monthly' => 'Maandelikse',
                        'Hourly' => 'Uurlikse',
                        'Every4hours' => 'Elke 4 uur',
                        'Every2hours' => 'Elke 2 ure',
                        'Every30mins'=> 'Elke 30 minute',
                        'Every15mins' => 'Elke 15 min',
                        'Every10mins' => 'Elke 10 minute',
                        'Every5mins' => 'Elke 5 min',
                        'FileName' => 'Lêer Naam',
                        'FileSize' => 'Grootte Van Die Lêer',
                        'Process' => 'Proses',
                        'Totalnoofrecords' => 'Die totale geen van rekords',
                        'CurrentProcessingRecord' => 'Huidige Verwerking Rekord',
                        'RemainingRecord' => 'Die Res Van Die Rekord',
                        'Completed' => 'Voltooi',
                        'TimeElapsed' => 'Tyd Verloop Het',
                        'approximate' => 'geskatte',
                        'DownloadLog' => 'View Log',
                        'NoRecord' => 'Geen Rekord',
                        'UploadedCSVFileLists' => 'Opgelaai CSV-Lêer Lyste',
                        'Hostname' => 'Host Naam',
                        'HostPort' => 'Gasheer Hawe',
                        'HostUsername' => 'Gasheer Gebruikersnaam',
                        'HostPassword' => 'Gasheer Wagwoord',
                        'HostPath' => 'Gasheer Pad',
                        'DefaultPort' => 'Standaard Hawe',
                        'FTPUsername' => 'FTP Gebruikernaam',
                        'FTPPassword' => 'FTP Wagwoord',
                        'ConnectionType' => 'Tipe Verbinding',
                        'ImportersActivity' => 'Invoerders Aktiwiteit',
                        'ImportStatistics' => 'Invoer Statistieke',
                        'FileManager' => 'Lêer Bestuurder',
                        'SmartSchedule' => 'Smart Skedule',
                        'ScheduledExport' => 'Geskeduleer Uitvoer',
                        'Templates' => 'Templates',
                        'LogManager' => 'Teken Bestuurder',
                        'NotSelectedAnyTab' => 'Nie Gekies Is Nie Enige Blad',
                        'EventInfo' => 'Geleentheidsinligting',
                        'EventDate' => 'Geleentheid Datum',
                        'EventMode' => 'Gebeurtenismodus',
                        'EventStatus' => 'Gebeurtenis Status',
                        'Actions' => 'Aksies',
                        'Date' => 'Datum',
                        'Purpose' => 'Doel',
                        'Revision' => 'Hersiening',
                        'Select' => 'Kies',
                        'Inserted' => 'Plaas',
                        'Updated' => 'Opgedateer',
                        'Skipped' => 'Oorgeslaan',                        
                        'Delete' => 'Verwijderen',
                        'Noeventsfound' => 'Geen gebeure gevind',
                        'ScheduleInfo' => 'Skedule Inligting',
                        'ScheduledDate' => 'Geskeduleerde Datum',
                        'ScheduledTime' => 'Geskeduleerde Tyd',
                        'Youhavenotscheduledanyevent' => 'Jy het nog nie geskeduleer enige gebeurtenis',
                        'Frequency' => 'Frekwensie',
                        'Time' => 'Tyd',
                        'EditSchedule' => 'Wysig Skedule',
                        'SaveChanges' => 'Stoor Veranderinge',
                        'TemplateInfo' => 'Sjabloon Info',
                        'TemplateName' => 'Die Naam Van Die Sjabloon',
                        'Module' => 'Module',
                        'CreatedTime' => 'Geskep Tyd',
                        'NoTemplateFound' => 'Geen Sjabloon Gevind',
                        'Download' => 'Aflaai',
                        'NoLogRecordFound' => 'Geen Teken Rekord Gevind',
                        'GeneralSettings' => 'Algemene Instellings',
                        'DatabaseOptimization' => 'Databasis Optimalisering',
                        'Media' =>'Media',
                        'AccessKey' => 'Toegang Sleutel',
                        'SecurityandPerformance' => 'Sekuriteit en Prestasie',
                        'Documentation' => 'Dokumentasie',
                        'MediaReport' => 'Media Verslag',
                        'DropTable' => 'Drop Tafel',
                        'Ifenabledplugindeactivationwillremoveplugindatathiscannotberestored' => 'Indien geaktiveer plugin deaktivering sal verwyder plugin data, dit kan nie herstel word nie.',
                        'Scheduledlogmails' => 'Geskeduleer teken posse',
                        'Enabletogetscheduledlogmails' => 'In staat stel om te kry geskeduleerde teken posse.',
                        'Sendpasswordtouser' => 'Wagwoord stuur aan die gebruiker',
                        'Enabletosendpasswordinformationthroughemail' => 'In staat stel om die wagwoord stuur die inligting deur middel van e-pos.',
                        'WoocommerceCustomattribute' => 'Woocommerce Persoonlike kenmerk',
                        'Enablestoregisterwoocommercecustomattribute' => 'In staat stel om te registreer woocommerce persoonlike kenmerk.',
                        'PleasemakesurethatyoutakenecessarybackupbeforeproceedingwithdatabaseoptimizationThedatalostcantbereverted' => 'Maak asseblief seker dat jy die neem van die nodige rugsteun voordat jy met die databasis optimalisering. Die data verloor kan teruggekeer word.',
                        'DeleteallorphanedPostPageMeta' => 'Verwyder al die weeskinders Pos/Page Meta',
                        'Deleteallunassignedtags' => 'Verwyder al die toegewezen tags',
                        'DeleteallPostPagerevisions' => 'Verwyder al die Post/Bladsy hersiening',
                        'DeleteallautodraftedPostPage' => 'Verwyder al die motor opgestel Pos/Page',
                        'DeleteallPostPageintrash' => 'Verwyder al die Post/Bladsy in die asblik',
                        'DeleteallCommentsintrash' => 'Verwyder al die Kommentaar in die asblik',
                        'DeleteallUnapprovedComments' => 'Verwyder al die Goedgekeurde Kommentaar',
                        'DeleteallPingbackComments' => 'Verwyder al Skakelkennisgewing Kommentaar',
                        'DeleteallTrackbackComments' => 'Verwyder al die Trackback Kommentaar',
                        'DeleteallSpamComments' => 'Verwyder al die Spam Kommentaar',
                        'RunDBOptimizer' => 'Hardloop DB Optimizer',
                        'DatabaseOptimizationLog' => 'Databasis Optimalisering Teken',
                        'noofOrphanedPostPagemetahasbeenremoved' => 'geen van Weeskinders Post/meta Bladsy is verwyder.',
                        'noofUnassignedtagshasbeenremoved' => 'geen van Toegewezen tags verwyder is.',
                        'noofPostPagerevisionhasbeenremoved' => 'geen van die Pos/Page weergawes verwyder is.',
                        'noofAutodraftedPostPagehasbeenremoved' => 'geen van die Motor opgestel Pos/Page is verwyder.',
                        'noofPostPageintrashhasbeenremoved' => 'geen van die Post/Bladsy in die asblik verwyder is.',
                        'noofSpamcommentshasbeenremoved' => 'geen van die Spam kommentaar is verwyder.',
                        'noofCommentsintrashhasbeenremoved' => 'geen van die Kommentaar in die asblik verwyder is.',
                        'noofUnapprovedcommentshasbeenremoved' => 'geen van die Goedgekeurde kommentaar is verwyder.',
                        'noofPingbackcommentshasbeenremoved' => 'geen Skakelkennisgewing kommentaar is verwyder.',
                        'noofTrackbackcommentshasbeenremoved' => 'geen van Trackback kommentaar is verwyder.',
                        'Allowauthorseditorstoimport' => 'Toelaat dat die skrywers/redakteurs te voer',
                        'Thisenablesauthorseditorstoimport' => 'Dit stel skrywers/redakteurs te voer.',
                        'MinimumrequiredphpinivaluesIniconfiguredvalues' => 'Minimum vereiste php.ini waardes (Ini ingestel waardes)',
                        'Variables' => 'Veranderlikes',
                        'SystemValues' => 'Stelsel Waardes',
                        'MinimumRequirements' => 'Minimum Vereistes',
                        'RequiredtoenabledisableLoadersExtentionsandmodules' => 'Nodig om te aktiveer/deaktiveer Loaders, Uitbreidings en modules:',
                        'DebugInformation' => 'Debug Inligting:',
                        'SmackcodersGuidelines' => 'Smackcoders Riglyne',
                        'DevelopmentNews' => 'Ontwikkeling Nuus',
                        'WhatsNew' => 'Whats New?',
                        'YoutubeChannel' => 'Youtube-Kanaal',
                        'OtherWordPressPlugins' => 'Ander WordPress Plugins',
                        'Count' => 'Tel',
                        'ImageType' => 'Beeld Tipe',
                        'Status' => 'Status',
                        'Loading' => 'Laai',
                        'LoveWPUltimateCSVImporterGivea5starreviewon' => "Is lief vir die WP Uiteindelike CSV Invoerder, Gee'n 5 ster sien op",
                        'ContactSupport' => 'Kontak Ondersteuning',
                        'Email' => 'E-pos',
                        'OrderId' => 'Bestel ID',
                        'Supporttype' => 'Ondersteuning tipe',
                        'BugReporting' => 'Bug Verslagdoening',
                        'FeatureEnhancement' => 'Funksie Verbetering',
                        'Message' => 'Boodskap',
                        'Send' => 'Stuur',
                        'NewsletterSubscription' => 'Nuusbrief Inskrywing',
                        'Subscribe' => 'Skryf',
                        'Note' => 'Nota',
                        'SubscribetoSmackcodersMailinglistafewmessagesayear' => "Skryf in vir Smackcoders Poslys ('n paar boodskappe per jaar)",
                        'Pleasedraftamailto' => "Asseblief ontwerp van'n e-pos aan",
                        'Ifyoudoesnotgetanyacknowledgementwithinanhour' => "As jy nie kry enige erkenning binne'n uur!",
                        'Selectyourmoduletoexportthedata' => 'Kies die module te Uitvoer van Data',
                        'Toexportdatabasedonthefilters' => 'Om te uitvoer van data wat gebaseer is op die filters',
                        'ExportFileName' => 'Uitvoer Lêer Naam',
                        'AdvancedSettings' => 'Gevorderde Instellings',
                        'ExportType' => 'Uitvoer Tipe',
                        'SplittheRecord' => 'Verdeel die Rekord',
                        'AdvancedFilters'=> 'Gevorderde Filters',
                        'Exportdatawithautodelimiters' => 'Uitvoer van data met outomatiese delimiters',
                        'Delimiters' => 'Delimiters',
                        'OtherDelimiters' => 'Ander Delimiters',
                        'Exportdataforthespecificperiod' => 'Uitvoer van data vir die spesifieke tydperk',
                        'StartFrom' => 'Begin Van',
                        'EndTo' => 'Einde Te',
                        'Exportdatawiththespecificstatus' => 'Uitvoer van data met die spesifieke status',
                        'All' => 'Al',
                        'Publish' => 'Publiseer',
                        'Sticky' => 'Sticky',
                        'Private' => 'Private',
                        'Protected' => 'Beskerm',
                        'Draft' => 'Ontwerp',
                        'Pending' => 'Hangende',
                        'Exportdatabyspecificauthors' => 'Uitvoer van data deur spesifieke skrywers',
                        'Authors' => 'Skrywers',
                        'Exportdatabyspecificcategory' => 'Uitvoer van data deur spesifieke kategorie',
                        'Category' => 'Kategorie',
                        'ExportdatabasedonspecificInclusions' => 'Uitvoer van data wat gebaseer is op die spesifieke Insluitings',
                        'DoyouwanttoSchedulethisExport' => 'Wil jy te Skeduleer dit Uitvoer',
                        'SelectTimeZone' => "Kies'n Tydsone",
                        'ScheduleExport' => 'Skedule Uitvoer',
                        'DataExported' => 'Data Uitgevoer Word',        
                        'FilePath' => 'File Path',
                        'polylangfields'=>'Polylang Instellings Velde'
                );
        return $response;
        }
}