﻿using Microsoft.AspNetCore.Mvc;
using System;

namespace Fur.MirrorController.Attributes
{
    /// <summary>
    /// 镜面控制器Action特性
    /// </summary>
    [AttributeUsage(AttributeTargets.Method)]
    public sealed class MirrorActionAttribute : ApiExplorerSettingsAttribute
    {
        /// <summary>
        /// 默认构造函数
        /// </summary>
        public MirrorActionAttribute() { }

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="enabled">是否附加</param>
        public MirrorActionAttribute(bool enabled)
        {
            Enabled = enabled;
            base.IgnoreApi = !enabled;
        }

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="swaggerGroups">swagger分组名称列表</param>
        public MirrorActionAttribute(params string[] swaggerGroups)
        {
            SwaggerGroups = swaggerGroups;
            base.GroupName = string.Join(Consts.GroupNameSeparator, swaggerGroups);
        }

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="enabled">是否启用镜像Action</param>
        /// <param name="swaggerGroups">swagger分组名称列表</param>
        public MirrorActionAttribute(bool enabled, params string[] swaggerGroups)
        {
            Enabled = enabled;
            SwaggerGroups = swaggerGroups;
            base.IgnoreApi = !enabled;
            base.GroupName = string.Join(Consts.GroupNameSeparator, swaggerGroups);
        }

        /// <summary>
        /// Action 名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 是否启用镜像Action，默认true
        /// </summary>
        public bool Enabled { get; set; } = true;

        /// <summary>
        /// 附加到swagger分组名称列表
        /// </summary>
        public string[] SwaggerGroups { get; set; }

        /// <summary>
        /// 保持原始名称
        /// </summary>
        public bool KeepOriginalName { get; set; } = false;

        /// <summary>
        /// 保留路由谓词
        /// </summary>
        public bool KeepRouteVerb { get; set; } = false;

        /// <summary>
        /// 每个单词都生成路由路径
        /// </summary>
        public bool SplitWordToRoutePath { get; set; } = false;

        /// <summary>
        /// 接口授权标识名称列表
        /// </summary>
        public string[] AuthorizeTo { get; set; }
    }
}