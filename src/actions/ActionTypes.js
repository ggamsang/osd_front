// SignIn
export const AUTH_SIGNIN = "AUTH_SIGNIN";
export const AUTH_SIGNIN_SUCCESS = "AUTH_SIGNIN_SUCCESS";
export const AUTH_SIGNIN_FAILURE = "AUTH_SIGNIN_FAILURE";
export const AUTH_SIGNIN_IS_NOT_MEMBER = "AUTH_SIGNIN_IS_NOT_MEMBER";
export const AUTH_SIGNIN_IS_NOT_PASSWORD = "AUTH_SIGNIN_IS_NOT_PASSWORD";

// FBSignIn
export const AUTH_FBSIGNIN = "AUTH_FBSIGNIN";
export const AUTH_FBSIGNIN_SUCCESS = "AUTH_FBSIGNIN_SUCCESS";
export const AUTH_FBSIGNIN_FAILURE = "AUTH_FBSIGNIN_FAILURE";
export const AUTH_FBSIGNIN_IS_NOT_MEMBER = "AUTH_FBSIGNIN_IS_NOT_MEMBER";

// FBSignUp
export const AUTH_FBSIGNUP = "AUTH_FBSIGNUP";
export const AUTH_FBSIGNUP_SUCCESS = "AUTH_FBSIGNUP_SUCCESS";
export const AUTH_FBSIGNUP_FAILURE = "AUTH_FBSIGNUP_FAILURE";
export const AUTH_FBSIGNUP_OVERLAP_MEMBER = "AUTH_FBSIGNUP_OVERLAP_MEMBER";

// LOGOUT
export const AUTH_SIGNOUT = "AUTH_SIGNOUT";

// Register
export const AUTH_SIGNUP = "AUTH_SIGNUP";
export const AUTH_SIGNUP_SUCCESS = "AUTH_SIGNUP_SUCCESS";
export const AUTH_SIGNUP_FAILURE = "AUTH_SIGNUP_FAILURE";

// login_chack
export const AUTH_CHECK_TOKEN = "AUTH_CHECK_TOKEN";
export const AUTH_CHECK_TOKEN_SUCCESS = "AUTH_CHECK_TOKEN_SUCCESS";
export const AUTH_CHECK_TOKEN_FAILURE = "AUTH_CHECK_TOKEN_FAILURE";

// email check
export const AUTH_CHECK_EMAIL = "AUTH_CHECK_EMAIL";
export const AUTH_CHECK_EMAIL_SUCCESS = "AUTH_CHECK_EMAIL_SUCCESS";
export const AUTH_CHECK_EMAIL_FAILURE = "AUTH_CHECK_EMAIL_FAILURE";

// nickname check
export const AUTH_CHECK_NICKNAME = "AUTH_CHECK_NICKNAME";
export const AUTH_CHECK_NICKNAME_SUCCESS = "AUTH_CHECK_NICKNAME_SUCCESS";
export const AUTH_CHECK_NICKNAME_FAILURE = "AUTH_CHECK_NICKNAME_FAILURE";

// facebook user check
export const AUTH_CHECK_FBUSER = "AUTH_CHECK_FBUSER";
export const AUTH_CHECK_FBUSER_SUCCESS = "AUTH_CHECK_FBUSER_SUCCESS";
export const AUTH_CHECK_FBUSER_FAILURE = "AUTH_CHECK_FBUSER_FAILURE";

// insert userDetail
export const INSERT_USER_DETAIL = "INSERT_USER_DETAIL";
export const INSERT_USER_DETAIL_SUCCESS = "INSERT_USER_DETAIL_SUCCESS";
export const INSERT_USER_DETAIL_FAILURE = "INSERT_USER_DETAIL_FAILURE";

// update userDetail
export const UPDATE_USER_DETAIL = "UPDATE_USER_DETAIL";
export const UPDATE_USER_DETAIL_SUCCESS = "UPDATE_USER_DETAIL_SUCCESS";
export const UPDATE_USER_DETAIL_FAILURE = "UPDATE_USER_DETAIL_FAILURE";


// FIND_PW

export const FIND_PW = "FIND_PW";
export const FIND_PW_SUCCESS = "FIND_PW_SUCCESS";
export const FIND_PW_FAILURE = "FIND_PW_FAILURE";

////////////////////////////////////////////////////////////////////////////
// design
////////////////////////////////////////////////////////////////////////////

// design List
export const GET_DESIGN_LIST = "GET_DESIGN_LIST";
export const DESIGN_LIST_CLEAR = "DESIGN_LIST_CLEAR";
export const DESIGN_LIST_FAIL = "DESIGN_LIST_FAIL";
export const GET_DESIGN_DETAIL = "GET_DESIGN_DETAIL";
export const GET_DESIGN_COUNT = "GET_DESIGN_COUNT";
export const DESIGN_DETAIL_RESET = "DESIGN_DETAIL_RESET";
export const GET_DESIGN_DETAIL_VIEW = "GET_DESIGN_DETAIL_VIEW";
export const GET_DESIGN_DETAIL_STEP = "GET_DESIGN_DETAIL_STEP";
export const GET_DESIGN_DETAIL_STEP_CARD = "GET_DESIGN_DETAIL_STEP_CARD";
export const GET_DESIGN_ISSUE_LIST = "GET_DESIGN_ISSUE_LIST";
export const GET_DESIGN_ISSUE_DETAIL = "GET_DESIGN_ISSUE_DETAIL";
export const DESIGN_DETAIL_VIEW_RESET = "DESIGN_DETAIL_VIEW_RESET";
export const GET_DESIGN_TOTAL_COUNT = "GET_DESIGN_TOTAL_COUNT";
export const GET_DESIGN_TOTAL_COUNT_FAIL = "GET_DESIGN_TOTAL_COUNT_FAIL";

// create design
export const CREATE_DESIGN = "CREATE_DESIGN";
export const CREATE_DESIGN_SUCCESS = "CREATE_DESIGN_SUCCESS";
export const CREATE_DESIGN_FAILURE = "CREATE_DESIGN_FAILURE";

// update design
export const UPDATE_DESIGN_INFO = "UPDATE_DESIGN_INFO";
export const UPDATE_DESIGN_INFO_SUCCESS = "UPDATE_DESIGN_INFO_SUCCESS";
export const UPDATE_DESIGN_INFO_FAILURE = "UPDATE_DESIGN_INFO_FAILURE";
export const UPDATE_DESIGN_FILE = "UPDATE_DESIGN_FILE";
export const UPDATE_DESIGN_FILE_SUCCESS = "UPDATE_DESIGN_FILE_SUCCESS";
export const UPDATE_DESIGN_FILE_FAILURE = "UPDATE_DESIGN_FILE_FAILURE";

// delete design
export const DELETE_DESIGN = "DELETE_DESIGN";
export const DELETE_DESIGN_SUCCESS = "DELETE_DESIGN_SUCCESS";
export const DELETE_DESIGN_FAILURE = "DELETE_DESIGN_FAILURE";

// create board
export const CREATE_BOARD = "CREATE_BOARD";
export const CREATE_BOARD_SUCCESS = "CREATE_BOARD_SUCCESS";
export const CREATE_BOARD_FAILURE = "CREATE_BOARD_FAILURE";

// update board
export const UPDATE_BOARD = "UPDATE_BOARD";
export const UPDATE_BOARD_SUCCESS = "UPDATE_BOARD_SUCCESS";
export const UPDATE_BOARD_FAILURE = "UPDATE_BOARD_FAILURE";

// delete board
export const DELETE_BOARD = "DELETE_BOARD";
export const DELETE_BOARD_SUCCESS = "DELETE_BOARD_SUCCESS";
export const DELETE_BOARD_FAILURE = "DELETE_BOARD_FAILURE";

// Get Board
export const GET_BOARD = "GET_BOARD";
export const GET_BOARD_SUCCESS = "GET_BOARD_SUCCESS";
export const GET_BOARD_FAILURE = "GET_BOARD_FAILURE";

// create card
export const CREATE_CARD = "CREATE_CARD";
export const CREATE_CARD_SUCCESS = "CREATE_CARD_SUCCESS";
export const CREATE_CARD_FAILURE = "CREATE_CARD_FAILURE";

// Get card
export const GET_CARD = "GET_CARD";
export const GET_CARD_SUCCESS = "GET_CARD_SUCCESS";
export const GET_CARD_FAILURE = "GET_CARD_FAILURE";

// Get card detail
export const GET_CARD_DETAIL = "GET_CARD_DETAIL";
export const GET_CARD_DETAIL_SUCCESS = "GET_CARD_DETAIL_SUCCESS";
export const GET_CARD_DETAIL_FAILURE = "GET_CARD_DETAIL_FAILURE";

// update card title
export const UPDATE_CARD_TITLE = "UPDATE_CARD_TITLE";
export const UPDATE_CARD_TITLE_SUCCESS = "UPDATE_CARD_TITLE_SUCCESS";
export const UPDATE_CARD_TITLE_FAILURE = "UPDATE_CARD_TITLE_FAILURE";

// update card content
export const UPDATE_CARD_CONTENT = "UPDATE_CARD_CONTENT";
export const UPDATE_CARD_CONTENT_SUCCESS = "UPDATE_CARD_CONTENT_SUCCESS";
export const UPDATE_CARD_CONTENT_FAILURE = "UPDATE_CARD_CONTENT_FAILURE";

// update card images
export const UPDATE_CARD_IMAGES = "UPDATE_CARD_IMAGES";
export const UPDATE_CARD_IMAGES_SUCCESS = "UPDATE_CARD_IMAGES_SUCCESS";
export const UPDATE_CARD_IMAGES_FAILURE = "UPDATE_CARD_IMAGES_FAILURE";

// update card sources
export const UPDATE_CARD_SOURCES = "UPDATE_CARD_SOURCES";
export const UPDATE_CARD_SOURCES_SUCCESS = "UPDATE_CARD_SOURCES_SUCCESS";
export const UPDATE_CARD_SOURCES_FAILURE = "UPDATE_CARD_SOURCES_FAILURE";

// delete card
export const DELETE_CARD = "DELETE_CARD";
export const DELETE_CARD_SUCCESS = "DELETE_CARD_SUCCESS";
export const DELETE_CARD_FAILURE = "DELETE_CARD_FAILURE";

// get card comment
export const GET_CARD_COMMENT = "GET_CARD_COMMENT";
export const GET_CARD_COMMENT_SUCCESS = "GET_CARD_COMMENT_SUCCESS";
export const GET_CARD_COMMENT_FAILURE = "GET_CARD_COMMENT_FAILURE";

// create card comment
export const CREATE_CARD_COMMENT = "CREATE_CARD_COMMENT";
export const CREATE_CARD_COMMENT_SUCCESS = "CREATE_CARD_COMMENT_SUCCESS";
export const CREATE_CARD_COMMENT_FAILURE = "CREATE_CARD_COMMENT_FAILURE";

// delete card comment
export const DELETE_CARD_COMMENT = "DELETE_CARD_COMMENT";
export const DELETE_CARD_COMMENT_SUCCESS = "DELETE_CARD_COMMENT_SUCCESS";
export const DELETE_CARD_COMMENT_FAILURE = "DELETE_CARD_COMMENT_FAILURE";

// create issue
export const CREATE_ISSUE = "CREATE_ISSUE";
export const CREATE_ISSUE_SUCCESS = "CREATE_ISSUE_SUCCESS";
export const CREATE_ISSUE_FAILURE = "CREATE_ISSUE_FAILURE";

// update issue
export const UPDATE_ISSUE = "UPDATE_ISSUE";
export const UPDATE_ISSUE_SUCCESS = "UPDATE_ISSUE_SUCCESS";
export const UPDATE_ISSUE_FAILURE = "UPDATE_ISSUE_FAILURE";

// update issue status
export const UPDATE_ISSUE_STATUS = "UPDATE_ISSUE_STATUS";
export const UPDATE_ISSUE_STATUS_SUCCESS = "UPDATE_ISSUE_STATUS_SUCCESS";
export const UPDATE_ISSUE_STATUS_FAILURE = "UPDATE_ISSUE_STATUS_FAILURE";

// delete issue
export const DELETE_ISSUE = "DELETE_ISSUE";
export const DELETE_ISSUE_SUCCESS = "DELETE_ISSUE_SUCCESS";
export const DELETE_ISSUE_FAILURE = "DELETE_ISSUE_FAILURE";

// create issue comment
export const CREATE_ISSUE_COMMENT = "CREATE_ISSUE_COMMENT";
export const CREATE_ISSUE_COMMENT_SUCCESS = "CREATE_ISSUE_COMMENT_SUCCESS";
export const CREATE_ISSUE_COMMENT_FAILURE = "CREATE_ISSUE_COMMENT_FAILURE";

// delete issue comment
export const DELETE_ISSUE_COMMENT = "DELETE_ISSUE_COMMENT";
export const DELETE_ISSUE_COMMENT_SUCCESS = "DELETE_ISSUE_COMMENT_SUCCESS";
export const DELETE_ISSUE_COMMENT_FAILURE = "DELETE_ISSUE_COMMENT_FAILURE";

// design like (디자인 전체에 대한 좋아요)
export const GET_LIKE_DESIGN = "GET_LIKE_DESIGN";
export const GET_LIKE_DESIGN_SUCCESS = "GET_LIKE_DESIGN_SUCCESS";
export const GET_LIKE_DESIGN_FAILURE = "GET_LIKE_DESIGN_FAILURE";
export const LIKE_DESIGN = "LIKE_DESIGN";
export const LIKE_DESIGN_SUCCESS = "LIKE_DESIGN_SUCCESS";
export const LIKE_DESIGN_FAILURE = "LIKE_DESIGN_FAILURE";
export const UNLIKE_DESIGN = "UNLIKE_DESIGN";
export const UNLIKE_DESIGN_SUCCESS = "UNLIKE_DESIGN_SUCCESS";
export const UNLIKE_DESIGN_FAILURE = "UNLIKE_DESIGN_FAILURE";

// design view update
export const UPDATE_DESIGN_VIEW = "UPDATE_DESIGN_VIEW";

// change to project
export const CHANGE_TO_PROJECT = "CHANGE_TO_PROJECT";
export const CHANGE_TO_PROJECT_SUCCESS = "CHANGE_TO_PROJECT_SUCCESS";
export const CHANGE_TO_PROJECT_FAILURE = "CHANGE_TO_PROJECT_FAILURE";


// design source update
export const UPDATE_DESIGN_SOURCE = "UPDATE_DESIGN_SOURCE";
export const UPDATE_DESIGN_SOURCE_SUCCESS = "UPDATE_DESIGN_SOURCE_SUCCESS";
export const UPDATE_DESIGN_SOURCE_FAILURE = "UPDATE_DESIGN_SOURCE_FAILURE";

// design source get
export const GET_DESIGN_SOURCE = "GET_DESIGN_SOURCE";
export const GET_DESIGN_SOURCE_SUCCESS = "GET_DESIGN_SOURCE_SUCCESS";
export const GET_DESIGN_SOURCE_FAILURE = "GET_DESIGN_SOURCE_FAILURE";
export const DESIGN_SOURCE_RESET = "DESIGN_SOURCE_RESET";

////////////////////////////////////////////////////////////////////////////
// group
////////////////////////////////////////////////////////////////////////////

// group List
export const GET_GROUP_LIST = "GET_GROUP_LIST";
export const GROUP_LIST_CLEAR = "GROUP_LIST_CLEAR";
export const GROUP_LIST_FAIL = "GROUP_LIST_FAIL";
export const GET_GROUP_TOTAL_COUNT = "GET_GROUP_TOTAL_COUNT";
export const GET_GROUP_TOTAL_COUNT_FAIL = "GET_GROUP_TOTAL_COUNT_FAIL";

// create group
export const CREATE_NEW_GROUP = "CREATE_NEW_GROUP";
export const CREATE_NEW_GROUP_SUCCESS = "CREATE_NEW_GROUP_SUCCESS";
export const CREATE_GROUP_FAILURE = "CREATE_GROUP_FAILURE";

// update group
export const UPDATE_GROUP = "UPDATE_GROUP";
export const UPDATE_GROUP_SUCCESS = "UPDATE_GROUP_SUCCESS";
export const UPDATE_GROUP_FAILURE = "UPDATE_GROUP_FAILURE";

// delete group
export const DELETE_GROUP = "DELETE_GROUP";
export const DELETE_GROUP_SUCCESS = "DETELE_GROUP_SUCCESS";
export const DELETE_GROUP_FAILURE = "DETELE_GROUP_FAILURE";

// group detail page
export const GET_GROUP_DETAIL = "GET_GROUP_DETAIL";
export const GET_GROUP_COUNT = "GET_GROUP_COUNT";
export const GET_DESIGN_IN_GROUP = "GET_DESIGN_IN_GROUP";
export const GET_DESIGN_IN_GROUP_CLEAR = "GET_DESIGN_IN_GROUP_CLEAR";
export const DESIGN_IN_GROUP_FAIL = "DESIGN_IN_GROUP_FAIL";
export const GET_GROUP_IN_GROUP = "GET_GROUP_IN_GROUP";
export const GET_GROUP_IN_GROUP_CLEAR = "GET_GROUP_IN_GROUP_CLEAR";
export const GROUP_IN_GROUP_FAIL = "GROUP_IN_GROUP_FAIL";

export const GET_WAITING_DESIGN = "GET_WAITING_DESIGN";
export const GET_WAITING_GROUP = "GET_WATING_GROUP";
export const GET_WAITING_DATA_FAIL = "GET_WAITING_DATA_FAIL";

export const GET_MY_DESIGN_LIST = "GET_MY_DESIGN_LIST";
export const GET_MY_DESIGN_LIST_SUCCESS = "GET_MY_DESIGN_LIST_SUCCESS";
export const GET_MY_DESIGN_LIST_FAILURE = "GET_MY_DESIGN_LIST_FAILURE";

export const GET_MY_GROUP_LIST = "GET_MY_GROUP_LIST";
export const GET_MY_GROUP_LIST_SUCCESS = "GET_MY_GROUP_LIST_SUCCESS";
export const GET_MY_GROUP_LIST_FAILURE = "GET_MY_GROUP_LIST_FAILURE";

// group issue
export const CREATE_GROUP_ISSUE = "CREATE_GROUP_ISSUE";
export const CREATE_GROUP_ISSUE_SUCCESS = "CREATE_GROUP_ISSUE_SUCCESS";
export const CREATE_GROUP_ISSUE_FAILURE = "CREATE_GROUP_ISSUE_FAILURE"
export const DELETE_GROUP_ISSUE = "DELETE_GROUP_ISSUE";
export const DELETE_GROUP_ISSUE_SUCCESS = "DELETE_GROUP_ISSUE_SUCCESS";
export const DELETE_GROUP_ISSUE_FAILURE = "DELETE_GROUP_ISSUE_FAILURE"

// group join
export const JOIN_GROUP = "JOIN_GROUP";
export const JOIN_GROUP_SUCCESS = "JOIN_GROUP_SUCCESS";
export const JOIN_GROUP_FAILURE = "JOIN_GROUP_FAILURE";

export const GROUP_JOIN_GROUP = "GROUP_JOIN_GROUP";
export const GROUP_JOIN_GROUP_SUCCESS = "GROUP_JOIN_GROUP_SUCCESS";
export const GROUP_JOIN_GROUP_FAILURE = "GROUP_JOIN_GROUP_FAILURE";

export const UPDATE_DESIGN_IN_GROUP_SUCCESS = "UPDATE_DESIGN_IN_GROUP_SUCCESS";
export const UPDATE_DESIGN_IN_GROUP_FAIL = "UPDATE_DESIGN_IN_GROUP_FAIL";
export const UPDATE_GROUP_IN_GROUP_SUCCESS = "UPDATE_GROUP_IN_GROUP_SUCCESS";
export const UPDATE_GROUP_IN_GROUP_FAIL = "UPDATE_GROUP_IN_GROUP_FAIL";

export const DELETE_DESIGN_IN_GROUP_SUCCESS = "DELETE_DESIGN_IN_GROUP_SUCCESS";
export const DELETE_DESIGN_IN_GROUP_FAIL = "DELETE_DESIGN_IN_GROUP_FAIL";
export const DELETE_GROUP_IN_GROUP_SUCCESS = "DELETE_GROUP_IN_GROUP_SUCCESS";
export const DELETE_GROUP_IN_GROUP_FAIL = "DELETE_GROUP_IN_GROUP_FAIL";

export const GET_MY_EXIST_DESIGN_LIST = "GET_MY_EXIST_DESIGN_LIST";
export const GET_MY_EXIST_DESIGN_LIST_SUCCESS = "GET_MY_EXIST_DESIGN_LIST_SUCCESS";
export const GET_MY_EXIST_DESIGN_LIST_FAILURE = "GET_MY_EXIST_DESIGN_LIST_FAILURE";

export const GET_MY_EXIST_GROUP_LIST = "GET_MY_EXIST_GROUP_LIST";
export const GET_MY_EXIST_GROUP_LIST_SUCCESS = "GET_MY_EXIST_GROUP_LIST_SUCCESS";
export const GET_MY_EXIST_GROUP_LIST_FAILURE = "GET_MY_EXIST_GROUP_LIST_FAILURE";

// group like
export const GET_LIKE_GROUP = "GET_LIKE_GROUP";
export const GET_LIKE_GROUP_SUCCESS = "GET_LIKE_GROUP_SUCCESS";
export const GET_LIKE_GROUP_FAILURE = "GET_LIKE_GROUP_FAILURE";
export const LIKE_GROUP = "LIKE_GROUP";
export const LIKE_GROUP_SUCCESS = "LIKE_GROUP_SUCCESS";
export const LIKE_GROUP_FAILURE = "LIKE_GROUP_FAILURE";
export const UNLIKE_GROUP = "UNLIKE_GROUP";
export const UNLIKE_GROUP_SUCCESS = "UNLIKE_GROUP_SUCCESS";
export const UNLIKE_GROUP_FAILURE = "UNLIKE_GROUP_FAILURE";


////////////////////////////////////////////////////////////////////////////
// designer
////////////////////////////////////////////////////////////////////////////

// designer List
export const GET_DESIGNER_LIST = "GET_DESIGNER_LIST";
export const DESIGNER_LIST_CLEAR = "DESIGNER_LIST_CLEAR";
export const DESIGNER_LIST_FAIL = "DESIGNER_LIST_FAIL";
export const GET_DESIGNER_DETAIL = "GET_DESIGNER_DETAIL";
export const GET_DESIGNER_COUNT = "GET_DESIGNER_COUNT";
export const GET_MY_DESIGN_IN_DESIGNER = "GET_MY_DESIGN_IN_DESIGNER";
export const GET_MY_DESIGN_IN_DESIGNER_CLEAR = "GET_MY_DESIGN_IN_DESIGNER_CLEAR";
export const MY_DESIGN_IN_DESIGNER_FAIL = "MY_DESIGN_IN_DESIGNER_FAIL";
export const GET_DESIGN_IN_DESIGNER = "GET_DESIGN_IN_DESIGNER";
export const GET_DESIGN_IN_DESIGNER_CLEAR = "GET_DESIGN_IN_DESIGNER_CLEAR";
export const DESIGN_IN_DESIGNER_FAIL = "DESIGN_IN_DESIGNER_FAIL";
export const GET_LIKE_IN_DESIGNER = "GET_LIKE_IN_DESIGNER";
export const GET_LIKE_IN_DESIGNER_CLEAR = "GET_LIKE_IN_DESIGNER_CLEAR";
export const LIKE_IN_DESIGNER_FAIL = "LIKE_IN_DESIGNER_FAIL";
export const GET_DESIGNER_TOTAL_COUNT = "GET_DESIGNER_TOTAL_COUNT";
export const GET_DESIGNER_TOTAL_COUNT_FAIL = "GET_DESIGNER_TOTAL_COUNT_FAIL";

// designer like
export const GET_LIKE_DESIGNER = "GET_LIKE_DESIGNER";
export const GET_LIKE_DESIGNER_SUCCESS = "GET_LIKE_DESIGNER_SUCCESS";
export const GET_LIKE_DESIGNER_FAILURE = "GET_LIKE_DESIGNER_FAILURE";
export const LIKE_DESIGNER = "LIKE_DESIGNER";
export const LIKE_DESIGNER_SUCCESS = "LIKE_DESIGNER_SUCCESS";
export const LIKE_DESIGNER_FAILURE = "LIKE_DESIGNER_FAILURE";
export const UNLIKE_DESIGNER = "UNLIKE_DESIGNER";
export const UNLIKE_DESIGNER_SUCCESS = "UNLIKE_DESIGNER_SUCCESS";
export const UNLIKE_DESIGNER_FAILURE = "UNLIKE_DESIGNER_FAILURE";


////////////////////////////////////////////////////////////////////////////
// commons
////////////////////////////////////////////////////////////////////////////

// get cagetgory level1
export const GET_CATEGORY_LEVEL1 = "GET_CATEGORY_LEVEL1";
export const GET_CATEGORY_LEVEL1_SUCCESS = "GET_CATEGORY_LEVEL1_SUCCESS";
export const GET_CATEGORY_LEVEL1_FAILURE = "GET_CATEGORY_LEVEL1_FAILURE";

// get cagetgory level2
export const GET_CATEGORY_LEVEL2 = "GET_CATEGORY_LEVEL2";
export const GET_CATEGORY_LEVEL2_SUCCESS = "GET_CATEGORY_LEVEL2_SUCCESS";
export const GET_CATEGORY_LEVEL2_FAILURE = "GET_CATEGORY_LEVEL2_FAILURE";

// get category level2 All
export const GET_CATEGORY_ALL = "GET_CATEGORY_ALL";
export const GET_CATEGORY_ALL_SUCCESS = "GET_CATEGORY_ALL_SUCCESS";
export const GET_CATEGORY_ALL_FAILURE = "GET_CATEGORY_ALL_FAILURE";

// my page
export const GET_MY_DETAIL = "GET_MY_DETAIL";
export const GET_MY_DESIGN = "GET_MY_DESIGN";
export const GET_MY_DESIGN_CLEAR = "GET_MY_DESIGN_CLEAR";
export const MY_DESIGN_FAIL = "MY_DESIGN_FAIL";
export const GET_MY_GROUP = "GET_MY_GROUP";
export const GET_MY_GROUP_CLEAR = "GET_MY_GROUP_CLEAR";
export const MY_GROUP_FAIL = "MY_GROUP_FAIL";
export const GET_MY_LIKE_DESIGN = "GET_MY_LIKE_DESIGN";
export const GET_MY_LIKE_DESIGN_CLEAR = "GET_MY_LIKE_DESIGN_CLEAR";
export const MY_LIKE_DESIGN_FAIL = "MY_LIKE_DESIGN_FAIL";
export const GET_MY_LIKE_GROUP = "GET_MY_LIKE_GROUP";
export const GET_MY_LIKE_GROUP_CLEAR = "GET_MY_LIKE_GROUP_CLEAR";
export const GET_MY_LIKE_DESIGNER = "GET_MY_LIKE_DESIGNER";
export const GET_MY_LIKE_DESIGNER_CLEAR = "GET_MY_LIKE_DESIGNER_CLEAR";
export const MY_LIKE_DESIGNER_FAIL = "MY_LIKE_DESIGNER_FAIL";

////////////////////////////////////////////////////////////////////////////
// search
////////////////////////////////////////////////////////////////////////////

// search member
export const GET_SEARCH_MEMVER = "GET_SEARCH_MEMBER";
export const GET_SEARCH_MEMBER_SUCCESS = "GET_SEARCH_MEMBER_SUCCESS";
export const GET_SEARCH_MEMBER_FAILURE = "GET_SEARCH_MEMBER_FAILURE";

// search issue
export const GET_SEARCH_ISSUE = "GET_SEARCH_ISSUE";
export const GET_SEARCH_ISSUE_SUCCESS = "GET_SEARCH_ISSUE_SUCCESS";
export const GET_SEARCH_ISSUE_FAILURE = "GET_SEARCH_ISSUE_FAILURE";


////////////////////////////////////////////////////////////////////////////
// openDesign
////////////////////////////////////////////////////////////////////////////

export const SET_ACTIVE = "SET_ACTIVE";

export const GET_TOP_DESIGN_LIST_SUCCESS = "GET_TOP_DESIGN_LIST_SUCCESS";
export const GET_TOP_DESIGN_LIST_FAILURE = "GET_TOP_DESIGN_LIST_FAILURE";
export const GET_TOP_DESIGN_LIST_CLEAR = "GET_TOP_DESIGN_LIST_CLEAR";
export const GET_TOP_DESIGNER_LIST_SUCCESS = "GET_TOP_DESIGNER_LIST_SUCCESS";
export const GET_TOP_DESIGNER_LIST_FAILURE = "GET_TOP_DESIGNER_LIST_FAILURE";


////////////////////////////////////////////////////////////////////////////
// message
////////////////////////////////////////////////////////////////////////////

export const GET_MY_MSG_LIST = "GET_MY_MSG_LIST";
export const GET_MY_MSG_LIST_SUCCESS = "GET_MY_MSG_LIST_SUCCESS";
export const GET_MY_MSG_LIST_FAILURE = "GET_MY_MSG_LIST_FAILURE";

export const GET_MY_MSG_DETAIL = "GET_MY_MSG_DETAIL";
export const GET_MY_MSG_DETAIL_SUCCESS = "GET_MY_MSG_DETAIL_SUCCESS";
export const GET_MY_MSG_DETAIL_FAILURE = "GET_MY_MSG_DETAIL_FAILURE";
export const GET_MY_MSG_DETAIL_CLEAR = "GET_MY_MSG_DETAIL_CLEAR";

export const SEND_MESSAGE = "SEND_MESSAGE";
export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";
export const SEND_MESSAGE_FAILURE = "SEND_MESSAGE_FAILURE";
