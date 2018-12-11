/**
 * Created by maodi on 2018/6/7.
 */
var MESSAGES = {
    INPUT_CORRECT_PASSWORD: "请输入正确的原密码",
    NEW_PASSWORD_AND_CONFIRM_NEW_PASSWORD_SAME: "请将新密码和确认新密码保持一致",
    SELECTED_NOT_CONTAIN_RELEASED: "所选信息不能包含已发布信息",
    INPUT_IS_EXIST: "您输入的内容已存在，请重新输入",
    INPUT_IS_NOT_NULL: "您输入的内容不能为空",
    PUBLIC_CONFIG_KEY_MUST_START_WITH_PUB: "公共配置键必须以pub.开头",
    PUBLIC_CONFIG_KEY_NOT_EQUAL_PUB: "公共配置键不能为pub.",
    PRODUCT_CONFIG_KEY_CAN_NOT_START_WITH_PUB: "项目中键不能以pub.开头",
    EXCEED: "您输入的内容超过",
    AT_LEAST: "您输入的内容至少",
    CHARACTER: "个字符",
    IS_NULL: "为空",
    EXCEED_CHARACTER: "超过20个字符",
    MOBILE_WRONG: "手机号码有误",
    TEL_WRONG: "固定电话有误",
    EMAIL_WRONG: "邮箱有误",
    NOT_SELECTED: "您选择的内容不能为空",
    EMPTY_TABLE: "没有对应结果",
    ZERO_RECORDS: "没有对应结果",
    LOADING_RECORDS: "加载中...",
    PROCESSING: "处理中...",
    IS_BATCH_DELETE: "是否对所选批量删除？",
    IS_DELETE: "是否对当前项所选项删除？",
    IS_OVER_RELEASE: "是否发布覆盖现有配置",
    IS_RELEASE: "是否发布当前信息",
    IS_BATCH_RELEASE: "是否对所选批量发布？",
    IS_EXPORT: "是否对所选进行导出？",
    IS_OFFLINE: "是否下线当前信息",
    NO_ACCOUNT: "账户不存在或密码错误",
    INPUT_ACCOUNT: "请输入您的登录账号",
    CONFIRM_NEW_PASSWORD: "确认新密码",
    NO_AUTH: "账户没有权限",
    AUTH_TIMEOUT: "登录超时，请重新登录",
    SERVER_NOT_RESPONDING: "服务器没有响应",
    SYSTEM_ERROR: "系统出错，尝试刷新页面",
    SYSTEM_EXCEPTION: "系统内部错误，请联系管理员",
    FORMAT_ERROR: "数据传输格式有误!",
    RELEASED: "当前实例已经发布",
    CONFIG_APP: "请先配置实例",
    SELECTED_CONFIG_CONTAINS_NO_APP: "选中的配置包含未配置实例的，请先配置实例",
    NOT_SAVE_VALUE: "当前实例没有保存值",
    NOT_SAVE_APP: "当前实例没有保存app",
    ADDED: "该实例已经新增，请进行其他操作；如要新增，请删除后新增",
    ADD_BEFORE: "请先进行新增操作，再进行修改",
    OFFLINE: "当前实例已经下线",
    CONFIRM: "确认",
    NEWS: "消息",
    ADD_FAIL: "添加失败",
    ADD_SUCCESS: "添加成功",
    UPDATE_FAIL: "修改失败",
    UPDATE_SUCCESS: "修改成功",
    DELETE_FAIL: "删除失败",
    DELETE_SUCCESS: "删除成功",
    RELEASE_FAIL: "发布失败",
    RELEASE_SUCCESS: "发布成功",
    AREA_NAME: "分布名",
    PRODUCT_NAME: "项目名",
    ORGAN_NAME: "部门名",
    ENV_NAME: "环境名",
    USER_NAME: "人员名",
    ACCOUNT_NAME: "账户名",
    MANAGER_NAME: "负责人名",
    ROLE_NAME: "角色名",
    AREA: "分布",
    PRODUCT: "项目",
    ORGAN: "部门",
    ENV: "环境",
    USER: "人员",
    ACCOUNT: "账户",
    MANAGER: "负责人",
    ROLE: "角色",
    PASSWORD: "密码",
    MOBILE: "电话",
    EMAIL: "邮箱"
};

var CONTENT = {
    EDIT_DELETE: '<span id="edit" class="action-btn auth-hidden">编辑</span><span id="del"' +
    ' class="action-btn auth-hidden">删除</span>',
    ADD_RELEASE_EDIT: '<span id="gray_properties_add" class="add-gray-action-btn auth-hidden sys-hidden">新增灰度</span><span id="properties_release" class="action-btn auth-hidden">发布</span><span id="properties_edit" class="action-btn auth-hidden">编辑</span><span id="properties_del" class="action-btn auth-hidden">删除</span>',
    ADD_EDIT_OFFLINE: '<span id="gray_properties_add" class="add-gray-action-btn auth-hidden sys-hidden">新增灰度</span><span id="properties_edit" class="action-btn auth-hidden">编辑</span><span id="properties_offline" class="action-btn auth-hidden">下线</span><span id="properties_del" class="action-btn auth-hidden">删除</span>',
    RELEASE_EDIT: '<span id="gray_properties_release" class="action-btn auth-hidden">发布</span><span id="gray_properties_edit" class="action-btn auth-hidden">编辑</span><span id="gray_properties_del" class="action-btn auth-hidden">删除</span>',
    EDIT_OFFLINE: '<span id="gray_properties_edit" class="action-btn auth-hidden">编辑</span><span id="gray_properties_offline" class="action-btn auth-hidden">下线</span><span id="gray_properties_del" class="action-btn auth-hidden">删除</span>',
    RELEASE: '<span id="release" class="action-btn auth-hidden">发布</span>',
    OFFLINE: '<span id="offline" class="action-btn auth-hidden">下线</span>',
    SELECT_LINE_CHECKBOX: '<input type="checkbox" name="select_line" class="auth-input"/>',
    SELECT_CHECKBOX: '<input type="checkbox" name="select" class="auth-input"/>',
    INSERT_CHECKBOX: '<input type="checkbox" name="insert" class="auth-input"/>',
    UPDATE_CHECKBOX: '<input type="checkbox" name="update" class="auth-input"/>',
    DELETE_CHECKBOX: '<input type="checkbox" name="delete" class="auth-input"/>',
    RELEASE_CHECKBOX: '<input type="checkbox" name="release" class="auth-input"/>',
    OFFLINE_CHECKBOX: '<input type="checkbox" name="offline" class="auth-input"/>'
};

var BUTTON = {
    YES: "是",
    NO: "否",
    UPLOAD: "上传",
    CONFIRM: "确定",
    REFRESH: "跳转",
    REFRESH_TO: "跳转到",
    SAVE: "保存",
    CANCEL: "取消",
    EDIT: "编辑",
    UPDATE: "修改",
    DELETE: "删除",
    ADD: "新增",
    BATCH_DELETE: "批量删除"
};

var NAV = {
    SETTING: "设置",
    PUBLIC_CONFIG: "公共配置",
    HISTORY_MANAGE: "历史记录管理",
    MAIN_VERSION: "主版本",
    GRAY_VERSION: "灰度版本",
    PRODUCT_MANAGE: "项目管理",
    MODULE_MANAGE: "模块管理",
    ENV_MANAGE: "环境管理",
    AREA_MANAGE: "分布管理",
    ORGAN_MANAGE: "部门管理",
    ROLE_MANAGE: "角色管理",
    USER_MANAGE: "人员管理",
    AUTH_MANAGE: "使用权限管理",
    LIST_PAGE: "列表页",
    ADD_PAGE: "添加页",
    MAIN_COPY_CONFIG_PAGE: "复制配置页",
    GRAY_COPY_CONFIG_PAGE: "灰度版本复制配置页",
    GRAY_ADD_PAGE: "灰度版本添加页",
    MAIN_ADD_PAGE: "添加页",
    GRAY_EDIT_PAGE: "灰度版本编辑页",
    MAIN_EDIT_PAGE: "编辑页",
    EDIT_PAGE: "编辑页",
    SETTING_IDS: {
        "公共配置灰度版本": "public_config_li",
        "公共配置无": "public_config_li",
        "历史记录管理无": "history_config_li",
        // "历史记录管理主版本": "history_main",
        "历史记录管理灰度版本": "history_gray",
        "设置项目管理": "product_manage",
        "设置模块管理": "module_manage",
        "设置环境管理": "env_manage",
        "设置分布管理": "area_manage",
        "设置部门管理": "organ_manage",
        "设置角色管理": "role_manage",
        "设置人员管理": "user_manage",
        "设置使用权限管理": "auth_manage"
    },
    PAGE_IDS: {
        "添加": "add_btn,gray_add_btn,import_btn,gray_import_btn,gray_properties_add,export_btn,gray_export_btn,json_save,xml_save,yml_save,gray_json_save,gray_xml_save,gray_yml_save,copy_config,gray_copy_config",
        "编辑": "properties_edit,gray_properties_edit,import_btn,gray_import_btn,export_btn,gray_export_btn,offline,json_edit,xml_edit,yml_edit,gray_json_edit,gray_xml_edit,gray_yml_edit,edit,copy_config,gray_copy_config",
        "删除": "delete_btn,gray_delete_btn,properties_del,gray_properties_del,export_btn,gray_export_btn,json_del,xml_del,yml_del,gray_json_del,gray_xml_del,gray_yml_del,del",
        "发布": "release_btn,release,gray_release_btn,properties_release,gray_properties_release,json_release,gray_json_release,xml_release,gray_xml_release,yml_release,gray_yml_release,export_btn,gray_export_btn",
        "下线": "offline_btn,offline,properties_offline,gray_properties_offline,json_offline,gray_json_offline,xml_offline,gray_xml_offline,yml_offline,gray_yml_offline,export_btn,gray_export_btn"
    },
    SETTING_PAGES: {
        "公共配置无无无": "/public_config.html",
        "公共配置灰度版本无无": "/public_config.html",
        "历史记录管理无已发布无": "/history_log_manage_main.html",
        "历史记录管理无未发布无": "/history_log_manage_main.html",
        "历史记录管理灰度版本已发布无": "/history_log_manage_gray.html",
        "历史记录管理灰度版本未发布无": "/history_log_manage_gray.html",
        "设置项目管理无无": "product.html",
        "设置模块管理无无": "module_product.html",
        "设置环境管理无无": "env_module_product.html",
        "设置分布管理无无": "area.html",
        "设置部门管理无无": "organ_area.html",
        "设置角色管理无无": "role.html",
        "设置人员管理无无": "user.html",
        "设置使用权限管理无无": "role_auth_resource.html"
    }
};

var HTML = {
    MAIN: "/views/common/main.html",
    INSTANCE: "/instance/page",
    INSTANCE_COPY_CONFIG: "/instance/copy_config_page",
    INSTANCE_GRAY_COPY_CONFIG: "/instance/gray_copy_config_page",
    INSTANCE_ADD: "/instance/add_page",
    INSTANCE_UPDATE: "/instance/update_page",
    INSTANCE_GRAY_ADD: "/instance/gray_add_page",
    INSTANCE_GRAY_UPDATE: "/instance/gray_update_page",
    PUBLIC_CONFIG: "/public_config.html",
    PUBLIC_CONFIG_COPY_CONFIG: "/public_config_copy_config.html",
    PUBLIC_CONFIG_GRAY_COPY_CONFIG: "/public_config_gray_copy_config.html",
    PUBLIC_CONFIG_ADD: "/public_config_add.html",
    PUBLIC_CONFIG_UPDATE: "/public_config_update.html",
    PUBLIC_CONFIG_GRAY_ADD: "/public_config_gray_add.html",
    PUBLIC_CONFIG_GRAY_UPDATE: "/public_config_gray_update.html",
    HISTORY_LOG_MANAGE_MAIN: "/history_log_manage_main.html",
    HISTORY_LOG_MANAGE_GRAY: "/history_log_manage_gray.html",
    PRODUCT: "product.html",
    PRODUCT_ADD: "product_add.html",
    PRODUCT_UPDATE: "product_update.html",
    MODULE_PRODUCT: "module_product.html",
    MODULE_PRODUCT_ADD: "module_product_add.html",
    MODULE_PRODUCT_UPDATE: "module_product_update.html",
    ENV_MODULE_PRODUCT: "env_module_product.html",
    ENV_MODULE_PRODUCT_ADD: "env_module_product_add.html",
    ENV_MODULE_PRODUCT_UPDATE: "env_module_product_update.html",
    ORGAN_AREA: "organ_area.html",
    ORGAN_AREA_ADD: "organ_area_add.html",
    ORGAN_AREA_UPDATE: "organ_area_update.html",
    AREA: "area.html",
    AREA_ADD: "area_add.html",
    AREA_UPDATE: "area_update.html",
    USER: "user.html",
    USER_ADD: "user_add.html",
    USER_UPDATE: "user_update.html",
    ROLE: "role.html",
    ROLE_ADD: "role_add.html",
    ROLE_UPDATE: "role_update.html",
    ROLE_AUTH_RES: "role_auth_resource.html",
    ROLE_AUTH_RES_ADD: "role_auth_resource_add.html",
    ROLE_AUTH_RES_UPDATE: "role_auth_resource_update.html"
};

//复制时要进行修改的项
var KEYS = [".Y"];