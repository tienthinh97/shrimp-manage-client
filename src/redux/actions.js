export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_PENDING = 'FETCH_DATA_PENDING';
export const HOME_ACTIVE = 'HOME_ACTIVE';
export const ICON_HIDEN = 'ICON_HIDEN';
export const FEATURE_ACTIVE = 'FEATURE_ACTIVE';
export const DOCS_ACTIVE = 'DOCS_ACTIVE';
export const NEWS_ACTIVE = 'NEWS_ACTIVE';
export const IS_REDIRECT = 'IS_REDIRECT';
export const USERNAME = 'USERNAME';
export const PASSWORD = 'PASSWORD';
export const IS_LOGIN = 'IS_LOGIN';
export const LOGOUT = 'LOGOUT';
export const TOKEN = 'TOKEN';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export const logout = () => ({
  type: LOGOUT
})

export const signup = () => ({
  type: SIGNUP_SUCCESS
})

export const token = myToken => ({
  type: TOKEN,
  token: myToken
})

export const isRedirect = () => ({
  type: IS_REDIRECT
})

export const news = () => ({
  type: NEWS_ACTIVE
})

export const isLogin = () => ({
  type: IS_LOGIN
});
  
export const fetchDataBegin = () => ({
  type: FETCH_DATA_PENDING
});

export const fetchDataSuccess = user => ({
  type: FETCH_DATA_SUCCESS,
  payload: { user }
});

export const fetchDataFailure = error => ({
  type: FETCH_DATA_ERROR,
  payload: { error }
});

export const hiden = () =>({
  type: ICON_HIDEN
})

export const home = () => ({
  type: HOME_ACTIVE
});

export const feature = () => ({
  type: FEATURE_ACTIVE
});

export const document = () => ({
  type: DOCS_ACTIVE  
});

export const username = () => ({
  type: USERNAME
});

export const password = () => ({
  type: PASSWORD
});
