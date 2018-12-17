package com.spring.constant;

import java.io.File;
import java.math.BigInteger;

public class CommonConstant {
	
	
	public static final String SAVE_DIR_INBOX = "Inbox";
	public static final String SAVE_DIR_PICTURES = "PICTURES";
	public static final String SAVE_DIR_LEGAL_DOC= "LEGAL DOCMENTS";
	public static final String  PROFILE_PICTURE_DIRECTORY="";
	
	public static final String INBOX_STATIC_MENU_INBOX = "Inbox";
	public static final String INBOX_STATIC_MENU_PICTURES = "PICTURES";
	public static final String INBOX_STATIC_MENU_LEGAL_DOC= "Legal Documents";
	public static final String INBOX_STATIC_MENU_EOLOGY_PRESENTATION= "Eulogy presentation";
	public static final String INBOX_STATIC_TIME_LOCKED_CONTENT = "Time Locked Content";
	public static final String INBOX_STATIC_MENU_RECEIP_NAME= "Recipient name";
	public static final String INBOX_STATIC_MENU_DIARY= "Diary";
	public static final String INBOX_STATIC_MENU_MY_FIRST= "My First";
	public static final String INBOX_STATIC_MENU_ACHIVEMENT_LIFE_GOALS= "Achievements & life goals";
	public static final String INBOX_STATIC_MENU_SCANNED_MATERIAL= "Scanned materials";
	public static final String INBOX_STATIC_MENU_VIDEOS= "Videos";
	public static final String INBOX_STATIC_MENU_SAFE_KEPPING= "Safe kepping";
	
	public static final String INBOX_STATIC_PATH= File.separator+"Inbox";
	
	public static final String SHARE_TYPE_PRIVATE = "PRIVATE";
	public static final String SHARE_TYPE_FRIENDS = "FRIENDS";
	public static final String SHARE_TYPE_PUBLIC = "PUBLIC";
	
	
	public static final Integer SHARE_TYPE_PRIVATE_ID = 1;
	public static final Integer SHARE_TYPE_PUBLIC_ID = 2;
	public static final Integer SHARE_TYPE_FRIENDS_ID =3;
	
	public static final String MY_LAST_WISHES_ADD_NEW_USER ="1";
	public static final String MY_LAST_WISHES_DELETE_NEW_USER ="2";
	public static final String MY_LAST_WISHES_EDIT_NEW_USER ="3";
	
	public static final String SEARCH_BY_USER_NAME ="username";
	public static final String SEARCH_BY_EMAIL_ID ="emailId";
	public static final String SEARCH_BY_USER_ID ="userid";
	
	
	public static final String USER_TYPE_ALL ="all";
	public static final String USER_TYPE_DEATH ="deathuser";
	public static final String USER_TYPE_ALIVE ="alive";
	
	public static final String FOLDER_TYPE_LEGAL_DOC= "\\Legal Documents";
	
	
	public static final String SEARCH_BY_ALL= "ALLUSERNAME";
	
	public static final int FRIEND_REQUEST_WAITING= 0;
	public static final int FRIEND_REQUEST_ACCEPTED= 1;
	public static final int FRIEND_REQUEST_REJECTED= 2;
	public static final int FRIEND_REQUEST_UNFRIEND= 3;
	public static final int FRIEND_REQUEST_SHOW_ALL= 4;
	
	public static final String TIME_LOCKED_QUESTION_ANSWER_QUESTION_TYPE_SCHOOL= "School";
	public static final String TIME_LOCKED_QUESTION_ANSWER_QUESTION_TYPE_COLLEGE= "College";
	
	public static final String TIME_LOCKED_QUESTION_ANSWER_GROUP_ID_SCHOOL_FORMAT= "TLC_S_";
	public static final String TIME_LOCKED_QUESTION_ANSWER_GROUP_ID_COLLEGE_FORMAT= "TLC_C_";
	
	
	public static final String INBOX_STATIC_ALBUM_PREFIX = "993a12ddb2dd7c2_album_";
	public static final String ALBUM_STATIC_PATH= File.separator+CommonConstant.SAVE_DIR_INBOX+File.separator+CommonConstant.INBOX_STATIC_ALBUM_PREFIX; 
	
	//ASSOCIATED_USER Constant
	public static final Integer FRIENDREQUEST_BY_ASSOCIATED_USER= 1;
	public static final Integer FRIENDREQUEST_TO_ASSOCIATED_USER= 2;
	
	public static final Integer PAGEINDEX_FOR_ASSOCIATED_USER= 1;
	public static final Integer TOTALNUMBEROFRECORDS_FOR_ASSOCIATED_USER= 0;
	public static final Integer TOTALNUMBEROFPAGES_FOR_ASSOCIATED_USER= 1;
	public static final Integer NUMBEROFRECORDSPERPAGE_FOR_ASSOCIATED_USER=6;
	
	public static final String SEARCH_FOR_INITIAL_FOR_ASSOCIATED_USER= "initial";
	
	public static final String HASHMAP_KEY_PAGENUMBER_FOR_ASSOCIATED_USER= "hashmap_key_pagenumber_for_associated_user";
	
	public static final String HASHMAP_KEY_USER_FOR_ASSOCIATED_USER= "hashmap_key_user_for_associated_user";
	
	public static final String MEMBER_TYPE_FREE ="free";
	public static final String MEMBER_TYPE_BASIC ="basic";
	public static final String MEMBER_TYPE_PRIME ="prime";
	public static final String MEMBER_TYPE_CHILD ="child";
	
	public static final double MEMORY_ASSIGNEDIN_BYTES_FOR_MEMBER_TYPE_FREE =05368709120.00; // 5gb //1gb = 1073741824 bytes  then 5gb =5368709120 bytes
	public static final double MEMORY_ASSIGNEDIN_BYTES_FOR_MEMBER_TYPE_BASIC =16106127360.00; // 15 gb //1gb = 1073741824 bytes  then 15gb = 16106127360 bytes
	public static final double MEMORY_ASSIGNEDIN_BYTES_FOR_MEMBER_TYPE_PRIME =26843545600.00;//25 gb  //1gb = 1073741824 bytes  then 25gb =26843545600 bytes
	public static final double MEMORY_ASSIGNEDIN_BYTES_FOR_MEMBER_TYPE_CHILD =0.00; // 0 bytes
	
	public static final String KEY_FOR_ASSIGNED_USER_FOLDERSIZE ="assigneduserfoldersize";  
	public static final String KEY_FOR_USED_USER_PLUS_CHILD_USED_FOLDERSIZE ="useduserchildfoldersize"; 
	public static final String KEY_FOR_USED_USER_FOLDERSIZE ="useduserfoldersize"; 
	public static final String KEY_FOR_REMAINING_USER_FOLDERSIZE ="remaininguserfoldersize";
	public static final String KEY_FOR_PERCENTAGE_USED_USER_FOLDERSIZE ="percentageuseduserfoldersize";
	
	
	public static final String KEY_FOR_ASSIGNED_ALL_CHILDREN_FOLDERSIZE ="assignedchildfoldersize"; 
	public static final String KEY_FOR_USED_ALL_CHILDREN_FOLDERSIZE ="usedchildfoldersize"; 
	public static final String KEY_FOR_REMAINING_ALL_CHILDREN_FOLDERSIZE ="remainingchildfoldersize"; 
	public static final String KEY_FOR_PERCENTAGE_USED_ALL_CHILDREN_FOLDERSIZE ="percentageusedchildfoldersize";
	
	
	public static final String CONTACT_US_EMAIL_ID = "info@everlastingtestament.com";
	public static final String CONTACT_US_MAIL_SUBJECT = "Test Mail @ Everlasting Testament Contact Us Mail";
	
}
