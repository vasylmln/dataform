declare({
  database: "wellis-400118",
  schema: "calendly",
  name: "users",
  description: "Raw users (employees) table"
});

declare({
  database: "wellis-400118",
  schema: "calendly",
  name: "event",
  description: "Raw events/meetings table"
});

declare({
  database: "wellis-400118",
  schema: "calendly",
  name: "event_type",
  description: "Raw event type templates table"
});

declare({
  database: "wellis-400118",
  schema: "calendly",
  name: "user_availability_schedule",
  description: "Raw availability schedule headers"
});

declare({
  database: "wellis-400118",
  schema: "calendly",
  name: "user_availability_schedule_rule",
  description: "Raw date-level or weekday-level scheduling rules"
});

declare({
  database: "wellis-400118",
  schema: "calendly",
  name: "user_availability_schedule_rule_interval",
  description: "Time intervals (from_time / to_time) for each rule"
});