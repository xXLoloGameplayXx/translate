exports.LANGUAGE = {
  CODE: "en",
  STANDARD_CODE: "en-US",
  FULL_CODE: "english",
  WIKI_CODE: "en",
  CONTRIBUTORS: ["iLxlo_"]
};

exports.ERROR_MESSAGES = {
  SOMETHING_WENT_WRONG: "Something went wrong while trying to execute that action",
  GENERIC_DESCRIPTION: "**[Contact us]({{url}})** for further instructions on what happened.",
  ERROR_ID: "Error ID: {{error_id}}",
  ALTERNATIVE_PERMISSION: "Alternative permission",
  ALTERNATIVE_PERMISSIONS: "Alternative permissions",
  MISSING_CLIENT_PERMISSION: "This error has been caused because I don't have the [``{{permission}}``]({{url}}) permission.",
  MISSING_USER_PERMISSION: "This error has been caused because you don't have the [``{{permission}}``]({{url}}) permission.",
  MISSING_USER_PERMISSION_2: "You don't have permissions to carry out this action with **{{user}}** ({{user.id}}).",

  INVALID_MEMBER: "The member you specified is invalid.",
  UNKNOWN_MEMBER: "The member you specified doesn't exist or isn't on the server.",
  INVALID_ROLE: "The role you have specified is invalid.",
  UNKNOWN_ROLE: "The role you specified doesn't exist.",
  MANAGED_ROLE: "The role you have specified is managed by an integration.",
  MEMBER_ALREADY_HAS_THE_ROLE: "**{{user}}** ({{user.id}}) already has the {{role}} role assigned."
};

exports.AUDIT_LOGS = {
  RESPONSIBLE: "Responsible: {{user}} ({{user.id}})",
  RESPONSIBLE_WITH_REASON: "Responsible: {{user}} ({{user.id}}). Reason: {{reason}}",
  DEFAULT_REASONS: {
    ROLE_VIA: "Role {{action}} via {{method}}."
  }
};

exports.GENERAL = {
  EXAMPLE: "Example",
  ADDED: "Added",
  COMMAND: "Command"
};

exports.COMMANDS = {
  ADDROLE: {
    MISSING_MEMBER: "You must @Mention the member to add a role.",
    MISSING_ROLE: "You must specify the role you want to grant.",
    COMPLETED: "You have added the {{role}} role to **{{user}}** ({{user.id}})."
  }
};
