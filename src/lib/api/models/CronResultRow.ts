/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CronResultRow = {
    /**
     * This value tells you if this specific cron job actually fired. It may not fire. Some cron jobs
     * only fire every 24 hours, for example.
     *
     */
    job_fired?: boolean | null;
    /**
     * This value tells you if this specific cron job actually did something. The job may fire but not
     * change anything.
     *
     */
    job_succeeded?: boolean | null;
    /**
     * If the cron job ran into some kind of an error, this value will be true.
     */
    job_errored?: boolean | null;
    /**
     * If the cron job ran into some kind of an error, this value will be the error message. The success message
     * if the job actually ran OK.
     *
     */
    message?: string | null;
};

