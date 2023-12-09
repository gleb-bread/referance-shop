export type CookieOptions = {
    expires?: Date|number|string,
    path?: string,
    domain?: string,
    secure?: boolean,
    httpOnly?: boolean,
    maxAge?: number | string,
    sameSite?:  boolean | "lax" | "strict" | "none",
}