import { nameAliases } from "../componentsAliases/nameAliases"

export const defaultsConfig = {
    [nameAliases.VBtnDark]: {
        class: ['v-btn--dark-theme'],
    },
    [nameAliases.timeField]: {
        class: ['time-field--outline'],
        variant: "underlined",
        density: 'compact',
        hideDetails: true,
    },
    [nameAliases.unVisibleTextArea]: {
        class: ['un-visible-text-area--outline'],
        variant: "underlined",
        density: 'compact',
        rows: 3,
        hideDetails: true,
    },

    [nameAliases.unVisibleTextField]:{
        class: ['un-visible-text-field--outline'],
        variant: "underlined",
        density: 'compact',
        hideDetails: true,
    },

    [nameAliases.vTextFieldUnderline]:{
        class: [],
        variant: "underlined",
        density: 'compact',
        hideDetails: true,
    },

    [nameAliases.unVisibleVSelect]: {
        class: ['un-visible-v-select--underline'],
        variant: "underlined",
        density: 'compact',
        hideDetails: true,
    },

    [nameAliases.noApacityVChip]: {
        class: ['no-apacity-v-chip--underline'],
    }
}