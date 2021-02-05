﻿using Furion.DependencyInjection;
using System;

namespace Furion.EventBus
{
    /// <summary>
    /// 轻量级消息中心（进程内）
    /// </summary>
    [SkipScan]
    public static class MessageCenter
    {
        /// <summary>
        /// 订阅消息
        /// </summary>
        /// <param name="messageId"></param>
        /// <param name="messageHandlers"></param>
        public static void Subscribe<T>(string messageId, params Action<string, object>[] messageHandlers)
        {
            InternalMessageCenter.Instance.Subscribe<T>(messageId, messageHandlers);
        }

        /// <summary>
        /// 发送消息
        /// </summary>
        /// <param name="messageId"></param>
        /// <param name="payload"></param>
        public static void Send(string messageId, object payload)
        {
            InternalMessageCenter.Instance.Send(messageId, payload);
        }

        /// <summary>
        /// 取消订阅
        /// </summary>
        /// <param name="messageId"></param>
        public static void Unsubscribe(string messageId)
        {
            InternalMessageCenter.Instance.Unsubscribe(messageId);
        }
    }
}