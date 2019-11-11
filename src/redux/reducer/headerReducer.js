import {HOME_ACTIVE, FEATURE_ACTIVE, DOCS_ACTIVE, ICON_HIDEN, IS_REDIRECT, NEWS_ACTIVE} from '../actions'

const initialState = {
    homeActive: false,
    featureActive: false,
    docsActive: false,
    newsActive: false,
    isRedirect: false
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME_ACTIVE:
            return {...state,
                homeActive: true,
                featureActive: false,
                docsActive: false,
                newsActive: false,
                isRedirect: false,
            }
        case ICON_HIDEN:
            return{
                ...state,
                homeActive: false
            }
        case FEATURE_ACTIVE:
            return {...state,
                homeActive: false,
                featureActive: true,
                newsActive: false,
                docsActive: false,
                isRedirect: false
            }
        case DOCS_ACTIVE:
            return {...state,
                homeActive: false,
                featureActive: false,
                newsActive: false,
                docsActive: true,
                isRedirect: false
            }
        case NEWS_ACTIVE:
            return {...state,
                homeActive: false,
                featureActive: false,
                newsActive: true,
                docsActive: false,
                isRedirect: false
        }
        case IS_REDIRECT: 
            return {
                ...state,
                isRedirect: true
            }
        
        
            
        default:
            return state
    }
}
export default headerReducer;