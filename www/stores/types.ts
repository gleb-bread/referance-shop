export interface MenuState {
    menuShow: boolean,
    menuTitle: string,
}

export interface ParserProductsState {
    products: ParserProductsType[],
    categories: {[key: string]: string[]},
    imagesForCategory: {[key: string]: string},
    loading: boolean,
    update: boolean,
    errorLoading: boolean,
    errorUpdate: boolean,
}


export type ParserProductsType = {
    id: number,
    title: string,
    good_id_from_provider: string | null,
    articul: string | null,
    status: string | null,
    check_invalide_links_views: number | null,
    category: string | null,
    subcategory : string | null,
    provider_category: string,
    provider_subcategory: string,
    link: string | null,
    price: number | null,
    edizm: string | null,
    stock: string | null,
    country: string | null,
    producer: string,
    brand: string | null,
    collection: string | null,
    provider: string | null,
    length: number | null,
    width: number | null,
    height: number | null,
    depth: number | null,
    thickness: number | null,
    format: string | null,
    material: string | null,
    images: {[key: string]: string} | null,
    variants: {[key: string]: string} | null,
    characteristics: {[key: string]: string} | null,
    product_usages: string,
    complectation: string | null,
    type: string | null,
    form: string | null,
    design: string | null,
    color: string | null,
    orientation: string | null,
    surface: string | null,
    pattern: string | null,
    montage: string | null,
    facture: string | null,
    dilution: string | null,
    consumption: string | null,
    usable_area: string | null,
    method: string | null,
    count_layers: string | null,
    blending: string | null,
    volume: string | null,
    date_add: string,
    date_edit: string,
    bitrix_views: number | null,
}

export type ParserProductsFirstJSONParse = {
    id: number,
    title: string,
    good_id_from_provider: string | null,
    articul: string | null,
    status: string | null,
    check_invalide_links_views: number | null,
    category: string | null,
    subcategory : string | null,
    provider_category: string,
    provider_subcategory: string,
    link: string | null,
    price: number | null,
    edizm: string | null,
    stock: string | null,
    country: string | null,
    producer: string,
    brand: string | null,
    collection: string | null,
    provider: string | null,
    length: number | null,
    width: number | null,
    height: number | null,
    depth: number | null,
    thickness: number | null,
    format: string | null,
    material: string | null,
    images: string | null,
    variants: string | null,
    characteristics: string | null,
    product_usages: string,
    complectation: string | null,
    type: string | null,
    form: string | null,
    design: string | null,
    color: string | null,
    orientation: string | null,
    surface: string | null,
    pattern: string | null,
    montage: string | null,
    facture: string | null,
    dilution: string | null,
    consumption: string | null,
    usable_area: string | null,
    method: string | null,
    count_layers: string | null,
    blending: string | null,
    volume: string | null,
    date_add: string,
    date_edit: string,
    bitrix_views: number | null,
}