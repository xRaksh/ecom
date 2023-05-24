const ProductReducer = (state, action) => {
    // if (action.type === "SET_LOADING") {
    //     return {
    //         ...state,
    //         isLoading: ture,
    //     }
    // }
    // if (action.type === "DATA_ERROR") {
    //     return {
    //         ...state,
    //         isLoading: false,
    //         isError: ture,
    //     }
    // }

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        // All Produtcs
        case "ALL_PRODUCT":
            return {
                ...state,
                isLoading: false,
                products: action.payload,
            };
        // feature data 
        case "SUGGESTED":
            const SuggestedData = action.payload.filter((cur) => {
                return cur.Suggested === "true";
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                Suggested: SuggestedData,
            };
        case "SPONSOR":
            const SponsorData = action.payload.filter((cur) => {
                return cur.Sponsor === "true";
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                Sponsor: SponsorData,
            };
        case "RECOMMED":
            const RecommedData = action.payload.filter((cur) => {
                return cur.Recommed === "true";
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                Recommed: RecommedData,
            };
        case "TOP":
            const TopData = action.payload.filter((cur) => {
                return cur.Top === "ture";
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                Top: TopData,
            };
        case "DATA_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        // Single Product data 
        // case "SET_SINGLE_LOADING":
        //     return {
        //         ...state,
        //         isSingleLoading: true,
        //     };

        // case "SET_SINGLE_PRODUCT":
        //     return {
        //         ...state,
        //         isSingleLoading: false,
        //         singleData: action.payload,
        //     };

        // case "SINGLE_DATA_ERROR":
        //     return {
        //         ...state,
        //         isSingleLoading: false,
        //         isError: true,
        //     }
        default:
            return state;
    }

}

export default ProductReducer