package com.kakarote.core.common.cache;

/**
 * crm缓存key
 * @author hmb
 */
public interface CrmCacheKey {
    /**
     * 打印模板缓存key
     */
    String CRM_PRINT_TEMPLATE_CACHE_KEY = "CRM:PRINT:TEMPLATE:";

    /**
     * 定时放入公海缓存key
     */
    String CRM_CUSTOMER_JOB_CACHE_KEY = "CrmCustomerJob:";

    /**
     * CRM定时发送消息
     */
    String CRM_MESSAGE_CACHE_KEY = "CrmMessageJob:";

    /**
     * crm待办事项数量缓存key
     */
    String CRM_BACKLOG_NUM_CACHE_KEY = "queryBackLogNum:";

    /**
     * crm呼叫中心缓存key
     */
    String CRM_CALL_CACHE_KEY = "call:";

    /**
     * 数据权限缓存key
     */
    String CRM_AUTH_USER_CACHE_KEY = "userAuth:Menu:";
}
