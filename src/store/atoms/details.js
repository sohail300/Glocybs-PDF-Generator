import { atom } from "recoil";

export const detailsState = atom({
    key: 'detailsState',
    default: {
        name: null,
        position: null,
        post: null,
        stipend: null,
        startingDate: {
            day: null,
            month: null,
            year: null
        }
    }
})