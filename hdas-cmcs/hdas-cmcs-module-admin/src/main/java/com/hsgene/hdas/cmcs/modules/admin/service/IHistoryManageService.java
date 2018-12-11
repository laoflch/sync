package com.hsgene.hdas.cmcs.modules.admin.service;

import com.hsgene.hdas.cmcs.modules.admin.domain.Instance;
import com.hsgene.hdas.cmcs.modules.admin.page.PageInfo;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * @description: 用户接口
 * @projectName: hdas-cmcs
 * @package: com.hsgene.hdas.cmcs.modules.admin.service
 * @author: maodi
 * @createDate: 2018/6/11 17:02
 * @version: 1.0
 * Copyright: Copyright (c) 2018
 */
public interface IHistoryManageService extends IBaseService<Instance> {

    PageInfo<Map<String, Object>> getHistory(HttpServletRequest request, long maxClassId);

    PageInfo<Map<String, Object>> getHistoryByCondition(HttpServletRequest request, long maxClassId);

}