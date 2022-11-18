﻿using Furion.Schedule;
using Microsoft.Extensions.Logging;

namespace Furion.Application;

//[Period(10000)]
public class TestJob : IJob
{
    private readonly ILogger<TestJob> _logger;
    public TestJob(ILogger<TestJob> logger)
    {
        _logger = logger;
    }

    public async Task ExecuteAsync(JobExecutingContext context, CancellationToken stoppingToken)
    {
        var jobDetail = context.JobDetail;

        var count = jobDetail.GetProperty<int>("count") + 1;
        jobDetail.AddOrUpdateProperty(nameof(count), count);

        _logger.LogWarning("{Description} {JobId} {Trigger} {count}", jobDetail.Description, context.JobId, context.Trigger, count);
        await Task.CompletedTask;
    }
}
