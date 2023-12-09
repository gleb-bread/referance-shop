import { VBtn, VTextarea, VTextField, VSelect, VChip } from "vuetify/lib/components/index.mjs";
import { nameAliases } from "./nameAliases";

export const Aliases = {
    [nameAliases.VBtnDark]: VBtn,
    [nameAliases.timeField]: VTextField,
    [nameAliases.unVisibleTextArea]: VTextarea,
    [nameAliases.unVisibleTextField]: VTextField,
    [nameAliases.vTextFieldUnderline]: VTextField,
    [nameAliases.unVisibleVSelect]: VSelect,
    [nameAliases.noApacityVChip]: VChip,
}