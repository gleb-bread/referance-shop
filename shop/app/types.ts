

export interface AnalPrStatuses {
    [key: string]: string
};

export interface LeadInfo{
    lead_CC: string | null, 
    lead_DZ: string | null, 
    lead_GI: string | null, 
    lead_MDV: string | null, 
    lead_MPM: string | null, 
    lead_NU: string | null, 
    lead_PR: string | null, 
    lead_RCC: string | null, 
    lead_RCM: string | null, 
    lead_RDV: string | null, 
    lead_RDZ: string | null, 
    lead_ROC: string | null, 
    lead_ROS: string | null, 
    lead_SM: string | null, 
    lead_address: string | null, 
    lead_brand: string | null, 
    lead_brand_print: string | null, 
    lead_budget: string | null, 
    lead_call_status: string | null, 
    lead_chats: string | null, 
    lead_coef_d: string | null, 
    lead_company_id: string | null, 
    lead_coords: string | null, 
    lead_date: string | null, 
    lead_date_MCH: string | null, 
    lead_date_edit: string | null, 
    lead_date_meter: string | null, 
    lead_date_supply: string | null, 
    lead_deadline: string | null, 
    lead_discount: string | null, 
    lead_docs_archive: string | null, 
    lead_docs_close_comment: string | null, 
    lead_docs_place: string | null, 
    lead_email: string | null, 
    lead_hash: string | null, 
    lead_id: string | null, 
    lead_ip: string | null, 
    lead_kind: string | null, 
    lead_manager: string | null, 
    lead_meter_format: string | null, 
    lead_meter_member: string | null, 
    lead_name: string | null, 
    lead_next_date: string | null, 
    lead_next_task: string | null, 
    lead_note: string | null, 
    lead_org_address: string | null, 
    lead_org_bank: string | null, 
    lead_org_bik: string | null, 
    lead_org_bill: string | null, 
    lead_org_inn: string | null, 
    lead_org_kpp: string | null, 
    lead_org_ks: string | null, 
    lead_org_ocpo: string | null, 
    lead_orgip: string | null, 
    lead_orgname: string | null, 
    lead_pasport_code: string | null, 
    lead_pasport_day: string | null, 
    lead_pasport_num: string | null, 
    lead_pasport_two: string | null, 
    lead_pasport_who: string | null, 
    lead_phone: string | null, 
    lead_pid: string | null, 
    lead_plan_begin: string | null, 
    lead_plan_end: string | null, 
    lead_product_another: string | null, 
    lead_products: string | null, 
    lead_project: string | null, 
    lead_rooms_names: string | null, 
    lead_shop: string | null, 
    lead_smeta_date_first: string | null, 
    lead_smeta_doc_first: string | null, 
    lead_smeta_postdiscount: string | null, 
    lead_smeta_sum: string | null, 
    lead_smeta_sum_act: string | null, 
    lead_smeta_sum_discount: string | null, 
    lead_smeta_sum_done: string | null, 
    lead_smeta_ver: string | null, 
    lead_status: string | null, 
    lead_status_MCH: string | null,
    lead_status_supply: string | null, 
    lead_track: string | null,
    lead_type_remont: string | null,
    lead_uid: string | null,
    lead_upsell: string | null,
    lead_url: string | null,
    lead_utm_campaign: string | null,
    lead_utm_content: string| null,
    lead_utm_medium: string | null,
    lead_utm_source: string | null,
    lead_utm_term: string| null,
    smeta_file: string | null,
    total_smeta_sum_act: string | null
    total_smeta_sum_all: string | null
}

export interface LeadStatus {
    status_id: string,
    statud_uid: string,
    status_num: string,
    status_name: string,
    status_color: string,
}

export interface UserNames {
    user_id: string,
    user_fio: string,
    right_role: string,
}

export interface APILeadAnaliticType{
    awards: {[key: string]: number},
    masters: {[key: string]: MasterType},
    leads: {[key: string]: LeadType},
    type: string,
}

export interface MasterType {
    master_id: number,
    master_project: string,
    master_status: string,
    master_fio: string,
    master_country: null | string,
    master_phone: string | null,
    master_metro: null | string,
    master_type:string
}

export interface LeadType {
    lead_id: number,
	lead_manager:number,
	lead_GI:number,
	lead_NU:number,
	lead_PR:number,
	lead_ROS:number,
	lead_SM:number,
	lead_RCC:number,
	lead_ROC:number,
	lead_CC:number,
	lead_MPM:number,
	lead_RDZ:number,
	lead_DZ:number,
	lead_RDV:number,
	lead_MDV:number,
	lead_RCM:number,
	lead_brand:number | null,
	lead_brand_prnumber:number | null,
	lead_smeta_ver:number | null,
	lead_deadline:string | null,
	lead_status:number|null,
	lead_call_status:string,
	lead_next_task:string,
	lead_next_date:string | null,
	lead_uid:number | null,
	lead_project:string | null,
	lead_shop:number,
	lead_pid:number | null,
	lead_url:string | null,
	lead_utm_source: string,
	lead_utm_medium:string | null,
	lead_utm_campaign: string | null,
	lead_utm_content: string | null,
	lead_utm_term: string | null,
	lead_budget: number | null,
	lead_products: string | null,
	lead_product_another: string | null,
	lead_upsell: string | null,
	lead_name: string | null,
	lead_phone: string | null,
	lead_address: string | null,
	lead_coords: string | null,
	lead_note: string | null,
	lead_rooms_names: string | null,
	lead_email: string | null,
	lead_pasport_num: string | null,
	lead_pasport_two: string | null,
	lead_pasport_who: string | null,
	lead_pasport_day: string | null,
	lead_pasport_code:string | null,
	lead_company_id:string | null,
	lead_track: string | null,
	lead_plan_begin: string | null,
	lead_plan_end: string | null,
	lead_ip: string | null,
	lead_smeta_sum: number | null,
	lead_smeta_sum_act: number | null,
	lead_smeta_sum_done:number | null,
	lead_smeta_postdiscount:number,
	lead_smeta_sum_discount:number | null,
	lead_smeta_date_first: string | null,
	lead_smeta_doc_first:string|null,
	lead_date_meter: string | null,
	lead_orgname: string | null,
	lead_orgip: string | null,
	lead_org_address: string | null,
	lead_org_inn: string | null,
	lead_org_kpp: string | null,
	lead_org_bill: string | null,
	lead_org_bank: string | null,
	lead_org_ks: string | null,
	lead_org_bik: string | null,
	lead_org_ocpo: string | null,
	lead_discount: number | null,
	lead_coef_d: number | null,
	lead_type_remont: string | null,
	lead_kind: string | null,
	lead_meter_format: string | null,
	lead_meter_member: string | null,
	lead_hash: string | null,
	lead_chats: string | null,
	smeta_file: string | null,
	lead_status_supply: number,
	lead_date_supply: string | null,
	lead_status_MCH: number | null,
	lead_date_MCH: string | null,
	lead_date: string,
	lead_date_edit: string,
	lead_docs_close_comment: string | null,
	lead_docs_archive: string | null,
	lead_docs_place: string | null,
	lead_workplan: number | null,
	deadline_days: null,
	brand: null,
	lastComment:string|null,
	daysPassed:number |null,
	sumFixed:number | null,
	sumFirstSmeta:number | null,
    lead_comment_SM: string | null,
    lead_comment_PR: string | null,
	error: null,
}

export interface AwardsType {
    [key: string | 'TOTAL']: {
        [key: string]: number,
    } & {
        TOTAL: number,
    }
}

export interface APIComment {
    info_lid: number,
    info_where: string,
    info_date_task: string,
    info_who: number,
    info_text: string,
}

export interface UserInfo {
    user_fio: string,
    user_focus_command: string,
    user_id: number,
    user_phone: string,
    user_email: string,
    isRight: boolean,
}

export interface Rights {
    GI: boolean,
    ROS: boolean,		
    PR:	boolean,	
    SM: boolean,			
    ASP: boolean,			
    complect: boolean,		
    master_list: boolean,	
    master_edit: boolean,	
    master_coord: boolean,	
    orders_list: boolean,	
    supply:	boolean,	
    MCH: boolean,			
    info_all: boolean,		
    orders_view: boolean,	
    RHR: boolean,			
    MHR: boolean,			
    only_HR: boolean,		
    sell: boolean,			
    prod: boolean,		
    create_act: boolean,
}

export interface LeadFilters {
    status: string[] | 'all',        
	role: number,                                                  
	dzb: string,                                           
	dze: string,                                           
	dls: string,                                           
	dle: string,                                           
	smeta_b: number,                                               
	smeta_e: number,                                               
	type_remont: string,                                        
	lsv: number,                                                   
	kind: string,                                               
	meter_format: string,                                       
	meter_member: string,                                                 
	ROS: number,                                                   
	s: string,                                                  
}

export type APIPriceKeys = string & ("roomwork" | "electro" | "specmontage" | 'plaster');
export type PriceWorkTypeKeys = string & ('Демонтажные работы' | 'Черновые отделочные работы' | 'Чистовые отделочные работы' | 'Подготовительные работы' |
    'Сантехнические работы' | 'Электромонтажные работы' | 'Спецмонтажные работы');
export type SubjectTypeWorkKeys = string & ('Полы' | 'Стены' | 'Откосы' | 'Потолки' | 'Двери' | 'Окна' | 'Прочие' | 'Сантехника' | 'Прочие' | 'Подготовка' |
    'Грузовые' | "" | 'Демонтаж' | 'Монтаж' | 'Сварные работы' | 'Механизированные работы' | 'Электромонтажные работы' |
    'Кондиционеры - Демонтаж' | 'Кондиционеры - Монтаж' | 'Востановление ванны наливным акрилом' | 'Теплые полы' |
    'Установка дверей' | 'Подготовительные работы' | 'Грузовые' | 'Ванная' | 'Другое');

export type APIPriceWorker = {
    [key in APIPriceKeys]: PriceWorkTypeWork
}

export type PriceWorkTypeWork = {
    [key in PriceWorkTypeKeys]: SubjectTypeWorker
}

export type SubjectTypeWorker = {
    [key in SubjectTypeWorkKeys]: WorkerType
}

export type WorkerType = {
    dir_name: string,
    dir_date_archived: string,
    dir_price_master: number | string,
    dir_cat: number | string,
    dir_id: number | string,
    dir_chapter: number | string,
    dir_type: string,
    dir_unit: string,
}


export type APIPrice = {
    [key in APIPriceKeys]: PriceWorkType
}

export type PriceWorkType = {
    [key in PriceWorkTypeKeys]: SubjectTypeWork
}

export type SubjectTypeWork = {
    [key in SubjectTypeWorkKeys]: Array<WorkType>
}

export interface WorkType{
    dir_name: string,
    dir_price: number | string,
    dir_price_LN: number | string,
    dir_price_RK: number | string,
    dir_num: string | number,
    dir_price_R2: number | string,
    dir_date_archived: string,
    dir_price_master: number | string,
    dir_cat: string,
    dir_id: number | string,
    dir_chapter: string,
    dir_type: string,
    dir_unit: string,
    dir_date: string,
    dir_formula: string | null,
    dir_coef_d: number,
    dir_coef_h: number,
    dir_coef_r: number,
}


export interface ChangeTypePrice {
    type: 'archive' | 'update', 
	dir_status: string,
	dir_file: string | number,
	dir_type: APIPriceKeys,
	dir_num: string | number,
	dir_cat: PriceWorkTypeKeys,
	dir_chapter: SubjectTypeWorkKeys,
	dir_cat2: string | number,
	dir_name: string | number,
	dir_unit: string | number,
	dir_count_default: string | number,
	dir_formula: string | number,
	dir_price: string | number,
	dir_price_LN: string | number,
	dir_price_RK: string | number,
	dir_price_master: string | number,
	dir_date: string | number,
	dir_date_edit: string | number,
	dir_date_archived: string | number,
	dir_coef_h: string | number,
	dir_coef_d: string | number,
	dir_coef_r: string | number,
	dir_coef_v: string | number,
	dir_price_R2: string | number,
}

export interface BrandType {
    brand_id: number,
    brand_short: string,
    brand_name: string,
    brand_org_name: string,
    brand_logo: string | null,
    telegram_QR: string | null,
    telegram_name: string | null,
    masters_phone: string | null,
}

export type ShortBrandType = 'id' | 'value' | 'brand_logo' | 'brand_name' | 'telegram_QR' | 'telegram_name' | 'masters_phone';

export type ABCAnalyticWorkInfo = {
    sum_act: string | null,
    sum_smeta: string | null,
    dir_id: number | null,
}
