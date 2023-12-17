export type ParserProductsFilter = {
    page?: number,
    category?: string,
    subcategory?: string,
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
    cart_id: number,
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

export type CookieOptions = {
    expires?: Date|number|string,
    path?: string,
    domain?: string,
    secure?: boolean,
    httpOnly?: boolean,
    maxAge?: number | string,
    sameSite?:  boolean | "lax" | "strict" | "none",
}

// export type CartStatuses = 'create' | 'handle' | 'assembly' | 'delivery' | 'success' | 'disabled';

// export type CartSubstatus = 'paid';

// export type CartTypeDisabled = 'defect' | 'time' | 'reconsider' | 'another';

export type CartProductItem = ParserProductsType & {count_cart: number}

export type CartProductFilter = {
    page: number,
    cart_uid?: number,
    cart_product_id?: number,
    cart_is_parsing?: number,
    cart_status_id?: number,
    cart_order_id?: number,
    cart_archive?: boolean,
}

export type CartAddType = {
    cart_product_id: number,
    cart_is_parsing: boolean,
    cart_count: number,
}

export type CartItem = {
    cart_archive: boolean
    cart_comment?: string
    cart_count?: number
    cart_date: string
    cart_date_update_archive?: string
    cart_id: number
    cart_is_parsing: boolean
    cart_order_id?: number
    cart_product_id: number
    cart_status_id?: number
    cart_uid: number
}

export type OrderType = {
    order_id: number,
    order_address: string | null,
    order_uid: number,
    order_status_id: number | null,
    order_substatus_id: number | null,
    order_comment: string | null,
    order_comment_disabled: string | null,
    order_type_disabled_id: number | null,
    order_date: string,
    order_price: number,
    order_discount: number | null,
    order_price_view: number,
}