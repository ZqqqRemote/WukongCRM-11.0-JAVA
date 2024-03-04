package com.kakarote.job.crm;

import com.alibaba.fastjson.JSONObject;
import com.kakarote.core.common.Result;
import com.kakarote.core.feign.admin.entity.AdminMessage;
import com.kakarote.core.feign.admin.entity.AdminMessageEnum;
import com.kakarote.core.feign.admin.service.AdminMessageService;
import com.kakarote.core.feign.crm.service.CrmService;
import com.xxl.job.core.biz.model.ReturnT;
import com.xxl.job.core.handler.annotation.XxlJob;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 定时发送消息
 */
@Component
@Slf4j
public class CrmMessageJob {

    @Autowired
    private CrmService crmService;

    @Autowired
    private AdminMessageService messageService;

    @XxlJob("CrmMessageJob")
    public ReturnT<String> crmMessageJobHandler(String param) {
        // 1. 查最近2个月到期
        Result<List<JSONObject>> result = crmService.queryNextTimeList();

        if (result != null && result.hasSuccess()) {
            List<JSONObject> jsonObjectList = result.getData();
            log.info("jsonObjectList", jsonObjectList);
            Optional.ofNullable(jsonObjectList).orElse(new ArrayList<>()).stream().forEach(jsonObject -> {
                // 2. 发送消息
                AdminMessage adminMessage = new AdminMessage();
                adminMessage.setTitle(jsonObject.get("customerName").toString() + "[2个月到期]");
                adminMessage.setContent(jsonObject.get("customerName").toString() + "[2个月到期]");
                adminMessage.setLabel(AdminMessageEnum.CRM_CUSTOMER_USER.getLabel());
                adminMessage.setType(AdminMessageEnum.CRM_CUSTOMER_USER.getType());
                adminMessage.setTypeId(Integer.valueOf(jsonObject.getLong("customerId").toString()));
                adminMessage.setCreateUser(14773L);
                adminMessage.setRecipientUser(14774L);
                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                adminMessage.setCreateTime(dateFormat.format(new Date()));
                log.info("adminMessage=>{}", adminMessage);
                messageService.save(adminMessage);
            });
        }

        log.info("定时发送消息执行完成");
        return ReturnT.SUCCESS;
    }
}
