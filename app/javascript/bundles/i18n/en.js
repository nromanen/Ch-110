import I18n from 'i18n-js';
I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {
  "account": {
    "are_you_sure": "Are you sure?",
    "current_password": "Current password",
    "delete_account": "I want to delete my account",
    "doctor_profile": "Doctor profile",
    "edit_account": "Edit account",
    "leave_blank": "leave blank if you don't want to change it",
    "my_schedules": "My schedules",
    "my_visits": "My visits",
    "need_password": "we need your current password to confirm your changes",
    "not_saved": "User account was not created:",
    "patient_card": "Patient card",
    "update": "Update",
    "waiting_confirmation": "Currently waiting confirmation for"
  },
  "activerecord": {
    "attributes": {
      "schedules": {
        "create_schedule": "Save schedule",
        "day": "Day",
        "doctor": "Doctor",
        "edit_schedule": "Editing schedule",
        "end_date": "End date",
        "end_time": "End time",
        "new_schedule": "New schedule",
        "no_schedules_message": "You don't have schedules right now",
        "schedules": "Schedules",
        "start_date": "Start date",
        "start_time": "Start time",
        "visit_type": "Visit type"
      },
      "users": {
        "email": "Email",
        "is_active": "Is active",
        "name": "Name",
        "password": "Password",
        "password_confirmation": "Password confirmation",
        "phone_number": "Phone number",
        "registration_date": "Registration date",
        "role": "Role",
        "surname": "Surname"
      },
      "visit_types": {
        "create_visit_type": "Save visit type",
        "description": "Description",
        "duration": "Duration",
        "edit_visit_type": "Editing visit type",
        "minutes": "minutes",
        "name": "Name",
        "new_visit_type": "New visit type",
        "visit_types": "Visit types"
      },
      "visits": {
        "cancel_visit": "Cancel visit",
        "create_visit": "Create visit",
        "date": "Date",
        "doctor": "Doctor",
        "new_visit": "New visit",
        "no_visits_message": "You don't have visits right now",
        "patient": "Patient",
        "time": "Time",
        "visit_type": "Visit type",
        "visits": "Visits",
        "was_canceled": "Visit was successfully canceled"
      }
    },
    "errors": {
      "messages": {
        "record_invalid": "Validation failed: %{errors}",
        "restrict_dependent_destroy": {
          "has_many": "Cannot delete record because dependent %{record} exist",
          "has_one": "Cannot delete record because a dependent %{record} exists"
        }
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    "abbr_month_names": [
      null,
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "day_names": [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "formats": {
      "default": "%Y-%m-%d",
      "long": "%B %d, %Y",
      "short": "%b %d"
    },
    "month_names": [
      null,
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    "order": [
      "year",
      "month",
      "day"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "about 1 hour",
        "other": "about %{count} hours"
      },
      "about_x_months": {
        "one": "about 1 month",
        "other": "about %{count} months"
      },
      "about_x_years": {
        "one": "about 1 year",
        "other": "about %{count} years"
      },
      "almost_x_years": {
        "one": "almost 1 year",
        "other": "almost %{count} years"
      },
      "half_a_minute": "half a minute",
      "less_than_x_minutes": {
        "one": "less than a minute",
        "other": "less than %{count} minutes"
      },
      "less_than_x_seconds": {
        "one": "less than 1 second",
        "other": "less than %{count} seconds"
      },
      "over_x_years": {
        "one": "over 1 year",
        "other": "over %{count} years"
      },
      "x_days": {
        "one": "1 day",
        "other": "%{count} days"
      },
      "x_minutes": {
        "one": "1 minute",
        "other": "%{count} minutes"
      },
      "x_months": {
        "one": "1 month",
        "other": "%{count} months"
      },
      "x_seconds": {
        "one": "1 second",
        "other": "%{count} seconds"
      },
      "x_years": {
        "one": "1 year",
        "other": "%{count} years"
      }
    },
    "prompts": {
      "day": "Day",
      "hour": "Hour",
      "minute": "Minute",
      "month": "Month",
      "second": "Second",
      "year": "Year"
    }
  },
  "days": {
    "friday": "Friday",
    "monday": "Monday",
    "saturday": "Saturday",
    "sunday": "Sunday",
    "thursday": "Thursday",
    "tuesday": "Tuesday",
    "wednesday": "Wednesday"
  },
  "devise": {
    "change_password": "Change my password",
    "change_password_error": "Password was not changed:",
    "characters_minimum": "characters minimum",
    "confirm_new_password": "Confirm new password",
    "confirmations": {
      "confirmed": "Your email address has been successfully confirmed.",
      "send_instructions": "You will receive an email with instructions for how to confirm your email address in a few minutes.",
      "send_paranoid_instructions": "If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."
    },
    "dnr_confirmation": "Didn't receive confirmation instructions?",
    "failure": {
      "already_authenticated": "You are already signed in.",
      "inactive": "Your account is not activated yet.",
      "invalid": "Invalid %{authentication_keys} or password.",
      "last_attempt": "You have one more attempt before your account is locked.",
      "locked": "Your account is locked.",
      "not_found_in_database": "Invalid %{authentication_keys} or password.",
      "timeout": "Your session expired. Please sign in again to continue.",
      "unauthenticated": "You need to sign in or sign up before continuing.",
      "unconfirmed": "You have to confirm your email address before continuing."
    },
    "forgot_password": "Forgot your password?",
    "mailer": {
      "confirmation_instructions": {
        "subject": "Confirmation instructions"
      },
      "email_changed": {
        "subject": "Email Changed"
      },
      "password_change": {
        "subject": "Password Changed"
      },
      "reset_password_instructions": {
        "subject": "Reset password instructions"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "new_password": "New password",
    "omniauth_callbacks": {
      "failure": "Could not authenticate you from %{kind} because \"%{reason}\".",
      "success": "Successfully authenticated from %{kind} account."
    },
    "passwords": {
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes.",
      "send_paranoid_instructions": "If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.",
      "updated": "Your password has been changed successfully. You are now signed in.",
      "updated_not_active": "Your password has been changed successfully."
    },
    "registrations": {
      "destroyed": "Bye! Your account has been successfully cancelled. We hope to see you again soon.",
      "signed_up": "Welcome! You have signed up successfully.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirmation link to confirm your new email address.",
      "updated": "Your account has been updated successfully.",
      "updated_but_not_signed_in": "Your account has been updated successfully, but since your password was changed, you need to sign in again"
    },
    "remember_me": "Remember me",
    "resend_ci": "Resend confirmation instructions",
    "reset_password_error": "Instruction was not sent:",
    "send_me_rpi": "Send me reset password instruction",
    "sessions": {
      "already_signed_out": "Signed out successfully.",
      "signed_in": "Signed in successfully.",
      "signed_out": "Signed out successfully."
    },
    "unlocks": {
      "send_instructions": "You will receive an email with instructions for how to unlock your account in a few minutes.",
      "send_paranoid_instructions": "If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.",
      "unlocked": "Your account has been unlocked successfully. Please sign in to continue."
    }
  },
  "errors": {
    "connection_refused": "Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "was already confirmed, please try signing in",
      "blank": "can't be blank",
      "confirmation": "doesn't match %{attribute}",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "can't be empty",
      "equal_to": "must be equal to %{count}",
      "even": "must be even",
      "exclusion": "is reserved",
      "expired": "has expired, please request a new one",
      "greater_than": "must be greater than %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "is not included in the list",
      "invalid": "is invalid",
      "less_than": "must be less than %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "model_invalid": "Validation failed: %{errors}",
      "not_a_number": "is not a number",
      "not_an_integer": "must be an integer",
      "not_found": "not found",
      "not_locked": "was not locked",
      "not_saved": {
        "one": "1 error prohibited this %{resource} from being saved:",
        "other": "%{count} errors prohibited this %{resource} from being saved:"
      },
      "odd": "must be odd",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "required": "must exist",
      "taken": "has already been taken",
      "too_long": {
        "one": "is too long (maximum is 1 character)",
        "other": "is too long (maximum is %{count} characters)"
      },
      "too_short": {
        "one": "is too short (minimum is 1 character)",
        "other": "is too short (minimum is %{count} characters)"
      },
      "wrong_length": {
        "one": "is the wrong length (should be 1 character)",
        "other": "is the wrong length (should be %{count} characters)"
      }
    },
    "template": {
      "body": "There were problems with the following fields:",
      "header": {
        "one": "1 error prohibited this %{model} from being saved",
        "other": "%{count} errors prohibited this %{model} from being saved"
      }
    },
    "unacceptable_request": "A supported version is expected in the Accept header.\n",
    "unavailable_session": "Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} was successfully created."
      },
      "destroy": {
        "alert": "%{resource_name} could not be destroyed.",
        "notice": "%{resource_name} was successfully destroyed."
      },
      "update": {
        "notice": "%{resource_name} was successfully updated."
      }
    }
  },
  "helpers": {
    "select": {
      "prompt": "Please select"
    },
    "submit": {
      "create": "Create %{model}",
      "submit": "Save %{model}",
      "update": "Update %{model}"
    }
  },
  "home": {
    "healthbook": "Healthbook"
  },
  "i18n": {
    "plural": {
      "keys": [
        "one",
        "other"
      ],
      "rule": "#<Proc:0x0000558cbd0cba80@/home/dv/.rvm/gems/ruby-2.6.6/gems/rails-i18n-6.0.0/lib/rails_i18n/common_pluralizations/one_other.rb:7 (lambda)>"
    }
  },
  "manager_bar": {
    "doctors": "Doctors",
    "patients": "Patients",
    "schedules": "Schedules",
    "visit_types": "Visit types",
    "visits": "Visits"
  },
  "nav_bar": {
    "contacts": "Contacts",
    "departments": "Departments",
    "log_in": "Log In",
    "log_out": "Log Out",
    "main": "Home",
    "news": "News",
    "sign_up": "Sign Up"
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%u%n",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "$"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": ".",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Billion",
          "million": "Million",
          "quadrillion": "Quadrillion",
          "thousand": "Thousand",
          "trillion": "Trillion",
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 3,
        "significant": true,
        "strip_insignificant_zeros": true
      },
      "storage_units": {
        "format": "%n %u",
        "units": {
          "byte": {
            "one": "Byte",
            "other": "Bytes"
          },
          "eb": "EB",
          "gb": "GB",
          "kb": "KB",
          "mb": "MB",
          "pb": "PB",
          "tb": "TB"
        }
      }
    },
    "nth": {
      "ordinalized": "#<Proc:0x0000558cbc803290@/home/dv/.rvm/gems/ruby-2.6.6/gems/activesupport-6.0.3.4/lib/active_support/locale/en.rb:26 (lambda)>",
      "ordinals": "#<Proc:0x0000558cbc8032e0@/home/dv/.rvm/gems/ruby-2.6.6/gems/activesupport-6.0.3.4/lib/active_support/locale/en.rb:7 (lambda)>"
    },
    "percentage": {
      "format": {
        "delimiter": "",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    }
  },
  "records": {
    "back": "Back",
    "delete": "Delete",
    "edit": "Edit",
    "show": "Show"
  },
  "support": {
    "array": {
      "last_word_connector": ", and ",
      "two_words_connector": " and ",
      "words_connector": ", "
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "pm"
  },
  "visit_types": {
    "Check-up": "Check-up",
    "Consultation": "Consultation"
  }
});
I18n.translations["ru"] = I18n.extend((I18n.translations["ru"] || {}), {
  "account": {
    "are_you_sure": "Are you sure?",
    "current_password": "Current password",
    "delete_account": "I want to delete my account",
    "doctor_profile": "Doctor profile",
    "edit_account": "Edit account",
    "leave_blank": "leave blank if you don't want to change it",
    "my_schedules": "My schedules",
    "my_visits": "My visits",
    "need_password": "we need your current password to confirm your changes",
    "not_saved": "User account was not created:",
    "patient_card": "Patient card",
    "update": "Update",
    "waiting_confirmation": "Currently waiting confirmation for"
  },
  "activerecord": {
    "attributes": {
      "schedules": {
        "create_schedule": "Save schedule",
        "day": "Day",
        "doctor": "Doctor",
        "edit_schedule": "Editing schedule",
        "end_date": "End date",
        "end_time": "End time",
        "new_schedule": "New schedule",
        "no_schedules_message": "You don't have schedules right now",
        "schedules": "Schedules",
        "start_date": "Start date",
        "start_time": "Start time",
        "visit_type": "Visit type"
      },
      "users": {
        "email": "Email",
        "is_active": "Is active",
        "name": "Name",
        "password": "Password",
        "password_confirmation": "Password confirmation",
        "phone_number": "Phone number",
        "registration_date": "Registration date",
        "role": "Role",
        "surname": "Surname"
      },
      "visit_types": {
        "create_visit_type": "Save visit type",
        "description": "Description",
        "duration": "Duration",
        "edit_visit_type": "Editing visit type",
        "minutes": "minutes",
        "name": "Name",
        "new_visit_type": "New visit type",
        "visit_types": "Visit types"
      },
      "visits": {
        "create_visit": "Create visit",
        "date": "Date",
        "doctor": "Doctor",
        "new_visit": "New visit",
        "no_visits_message": "You don't have visits right now",
        "patient": "Patient",
        "time": "Time",
        "visit_type": "Visit type",
        "visits": "Visits"
      }
    },
    "errors": {
      "messages": {
        "record_invalid": "Validation failed: %{errors}",
        "restrict_dependent_destroy": {
          "has_many": "Cannot delete record because dependent %{record} exist",
          "has_one": "Cannot delete record because a dependent %{record} exists"
        }
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    "abbr_month_names": [
      null,
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "day_names": [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "formats": {
      "default": "%Y-%m-%d",
      "long": "%B %d, %Y",
      "short": "%b %d"
    },
    "month_names": [
      null,
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    "order": [
      "year",
      "month",
      "day"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "about 1 hour",
        "other": "about %{count} hours"
      },
      "about_x_months": {
        "one": "about 1 month",
        "other": "about %{count} months"
      },
      "about_x_years": {
        "one": "about 1 year",
        "other": "about %{count} years"
      },
      "almost_x_years": {
        "one": "almost 1 year",
        "other": "almost %{count} years"
      },
      "half_a_minute": "half a minute",
      "less_than_x_minutes": {
        "one": "less than a minute",
        "other": "less than %{count} minutes"
      },
      "less_than_x_seconds": {
        "one": "less than 1 second",
        "other": "less than %{count} seconds"
      },
      "over_x_years": {
        "one": "over 1 year",
        "other": "over %{count} years"
      },
      "x_days": {
        "one": "1 day",
        "other": "%{count} days"
      },
      "x_minutes": {
        "one": "1 minute",
        "other": "%{count} minutes"
      },
      "x_months": {
        "one": "1 month",
        "other": "%{count} months"
      },
      "x_seconds": {
        "one": "1 second",
        "other": "%{count} seconds"
      },
      "x_years": {
        "one": "1 year",
        "other": "%{count} years"
      }
    },
    "prompts": {
      "day": "Day",
      "hour": "Hour",
      "minute": "Minute",
      "month": "Month",
      "second": "Second",
      "year": "Year"
    }
  },
  "days": {
    "friday": "Friday",
    "monday": "Monday",
    "saturday": "Saturday",
    "sunday": "Sunday",
    "thursday": "Thursday",
    "tuesday": "Tuesday",
    "wednesday": "Wednesday"
  },
  "devise": {
    "change_password": "Change my password",
    "change_password_error": "Password was not changed:",
    "characters_minimum": "characters minimum",
    "confirm_new_password": "Confirm new password",
    "confirmations": {
      "confirmed": "Your email address has been successfully confirmed.",
      "send_instructions": "You will receive an email with instructions for how to confirm your email address in a few minutes.",
      "send_paranoid_instructions": "If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."
    },
    "dnr_confirmation": "Didn't receive confirmation instructions?",
    "failure": {
      "already_authenticated": "You are already signed in.",
      "inactive": "Your account is not activated yet.",
      "invalid": "Invalid %{authentication_keys} or password.",
      "last_attempt": "You have one more attempt before your account is locked.",
      "locked": "Your account is locked.",
      "not_found_in_database": "Invalid %{authentication_keys} or password.",
      "timeout": "Your session expired. Please sign in again to continue.",
      "unauthenticated": "You need to sign in or sign up before continuing.",
      "unconfirmed": "You have to confirm your email address before continuing."
    },
    "forgot_password": "Forgot your password?",
    "mailer": {
      "confirmation_instructions": {
        "subject": "Confirmation instructions"
      },
      "email_changed": {
        "subject": "Email Changed"
      },
      "password_change": {
        "subject": "Password Changed"
      },
      "reset_password_instructions": {
        "subject": "Reset password instructions"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "new_password": "New password",
    "omniauth_callbacks": {
      "failure": "Could not authenticate you from %{kind} because \"%{reason}\".",
      "success": "Successfully authenticated from %{kind} account."
    },
    "passwords": {
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes.",
      "send_paranoid_instructions": "If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.",
      "updated": "Your password has been changed successfully. You are now signed in.",
      "updated_not_active": "Your password has been changed successfully."
    },
    "registrations": {
      "destroyed": "Bye! Your account has been successfully cancelled. We hope to see you again soon.",
      "signed_up": "Welcome! You have signed up successfully.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirmation link to confirm your new email address.",
      "updated": "Your account has been updated successfully.",
      "updated_but_not_signed_in": "Your account has been updated successfully, but since your password was changed, you need to sign in again"
    },
    "remember_me": "Remember me",
    "resend_ci": "Resend confirmation instructions",
    "reset_password_error": "Instruction was not sent:",
    "send_me_rpi": "Send me reset password instruction",
    "sessions": {
      "already_signed_out": "Signed out successfully.",
      "signed_in": "Signed in successfully.",
      "signed_out": "Signed out successfully."
    },
    "unlocks": {
      "send_instructions": "You will receive an email with instructions for how to unlock your account in a few minutes.",
      "send_paranoid_instructions": "If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.",
      "unlocked": "Your account has been unlocked successfully. Please sign in to continue."
    }
  },
  "errors": {
    "connection_refused": "Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "was already confirmed, please try signing in",
      "blank": "can't be blank",
      "confirmation": "doesn't match %{attribute}",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "can't be empty",
      "equal_to": "must be equal to %{count}",
      "even": "must be even",
      "exclusion": "is reserved",
      "expired": "has expired, please request a new one",
      "greater_than": "must be greater than %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "is not included in the list",
      "invalid": "is invalid",
      "less_than": "must be less than %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "model_invalid": "Validation failed: %{errors}",
      "not_a_number": "is not a number",
      "not_an_integer": "must be an integer",
      "not_found": "not found",
      "not_locked": "was not locked",
      "not_saved": {
        "one": "1 error prohibited this %{resource} from being saved:",
        "other": "%{count} errors prohibited this %{resource} from being saved:"
      },
      "odd": "must be odd",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "required": "must exist",
      "taken": "has already been taken",
      "too_long": {
        "one": "is too long (maximum is 1 character)",
        "other": "is too long (maximum is %{count} characters)"
      },
      "too_short": {
        "one": "is too short (minimum is 1 character)",
        "other": "is too short (minimum is %{count} characters)"
      },
      "wrong_length": {
        "one": "is the wrong length (should be 1 character)",
        "other": "is the wrong length (should be %{count} characters)"
      }
    },
    "template": {
      "body": "There were problems with the following fields:",
      "header": {
        "one": "1 error prohibited this %{model} from being saved",
        "other": "%{count} errors prohibited this %{model} from being saved"
      }
    },
    "unacceptable_request": "A supported version is expected in the Accept header.\n",
    "unavailable_session": "Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} was successfully created."
      },
      "destroy": {
        "alert": "%{resource_name} could not be destroyed.",
        "notice": "%{resource_name} was successfully destroyed."
      },
      "update": {
        "notice": "%{resource_name} was successfully updated."
      }
    }
  },
  "helpers": {
    "select": {
      "prompt": "Please select"
    },
    "submit": {
      "create": "Create %{model}",
      "submit": "Save %{model}",
      "update": "Update %{model}"
    }
  },
  "home": {
    "healthbook": "Healthbook"
  },
  "i18n": {
    "plural": {
      "keys": [
        "one",
        "other"
      ],
      "rule": "#<Proc:0x0000558cbd0cba80@/home/dv/.rvm/gems/ruby-2.6.6/gems/rails-i18n-6.0.0/lib/rails_i18n/common_pluralizations/one_other.rb:7 (lambda)>"
    }
  },

  "manager_bar": {
    "doctors": "Doctors",
    "patients": "Patients",
    "schedules": "Schedules",
    "visit_types": "Visit types",
    "visits": "Visits"
  },
  "nav_bar": {
    "contacts": "Contacts",
    "departments": "Departments",
    "log_in": "Log In",
    "log_out": "Log Out",
    "main": "Home",
    "news": "News",
    "sign_up": "Sign Up"
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%u%n",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "$"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": ".",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Billion",
          "million": "Million",
          "quadrillion": "Quadrillion",
          "thousand": "Thousand",
          "trillion": "Trillion",
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 3,
        "significant": true,
        "strip_insignificant_zeros": true
      },
      "storage_units": {
        "format": "%n %u",
        "units": {
          "byte": {
            "one": "Byte",
            "other": "Bytes"
          },
          "eb": "EB",
          "gb": "GB",
          "kb": "KB",
          "mb": "MB",
          "pb": "PB",
          "tb": "TB"
        }
      }
    },
    "nth": {
      "ordinalized": "#<Proc:0x000000000a031f60@G:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/activesupport-6.0.3.4/lib/active_support/locale/en.rb:26 (lambda)>",
      "ordinals": "#<Proc:0x000000000a031f88@G:/Ruby26-x64/lib/ruby/gems/2.6.0/gems/activesupport-6.0.3.4/lib/active_support/locale/en.rb:7 (lambda)>"
    },
    "percentage": {
      "format": {
        "delimiter": "",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    }
  },
  "records": {
    "back": "Back",
    "delete": "Delete",
    "edit": "Edit",
    "show": "Show"
  },
  "support": {
    "array": {
      "last_word_connector": ", and ",
      "two_words_connector": " and ",
      "words_connector": ", "
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "pm"
  },
  "visit_types": {
    "Check-up": "Check-up",
    "Consultation": "Consultation"
  }
});
I18n.translations["uk"] = I18n.extend((I18n.translations["uk"] || {}), {
  "account": {
    "are_you_sure": "Are you sure?",
    "current_password": "Current password",
    "delete_account": "I want to delete my account",
    "doctor_profile": "Doctor profile",
    "edit_account": "Edit account",
    "leave_blank": "leave blank if you don't want to change it",
    "my_schedules": "My schedules",
    "my_visits": "My visits",
    "need_password": "we need your current password to confirm your changes",
    "not_saved": "User account was not created:",
    "patient_card": "Patient card",
    "update": "Update",
    "waiting_confirmation": "Currently waiting confirmation for"
  },
  "activerecord": {
    "attributes": {
      "schedules": {
        "create_schedule": "Save schedule",
        "day": "Day",
        "doctor": "Doctor",
        "edit_schedule": "Editing schedule",
        "end_date": "End date",
        "end_time": "End time",
        "new_schedule": "New schedule",
        "no_schedules_message": "You don't have schedules right now",
        "schedules": "Schedules",
        "start_date": "Start date",
        "start_time": "Start time",
        "visit_type": "Visit type"
      },
      "users": {
        "email": "Email",
        "is_active": "Is active",
        "name": "Name",
        "password": "Password",
        "password_confirmation": "Password confirmation",
        "phone_number": "Phone number",
        "registration_date": "Registration date",
        "role": "Role",
        "surname": "Surname"
      },
      "visit_types": {
        "create_visit_type": "Save visit type",
        "description": "Description",
        "duration": "Duration",
        "edit_visit_type": "Editing visit type",
        "minutes": "minutes",
        "name": "Name",
        "new_visit_type": "New visit type",
        "visit_types": "Visit types"
      },
      "visits": {
        "create_visit": "Create visit",
        "date": "Date",
        "doctor": "Doctor",
        "new_visit": "New visit",
        "no_visits_message": "You don't have visits right now",
        "patient": "Patient",
        "time": "Time",
        "visit_type": "Visit type",
        "visits": "Visits"
      }
    },
    "errors": {
      "messages": {
        "record_invalid": "Validation failed: %{errors}",
        "restrict_dependent_destroy": {
          "has_many": "Cannot delete record because dependent %{record} exist",
          "has_one": "Cannot delete record because a dependent %{record} exists"
        }
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    "abbr_month_names": [
      null,
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "day_names": [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "formats": {
      "default": "%Y-%m-%d",
      "long": "%B %d, %Y",
      "short": "%b %d"
    },
    "month_names": [
      null,
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    "order": [
      "year",
      "month",
      "day"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "about 1 hour",
        "other": "about %{count} hours"
      },
      "about_x_months": {
        "one": "about 1 month",
        "other": "about %{count} months"
      },
      "about_x_years": {
        "one": "about 1 year",
        "other": "about %{count} years"
      },
      "almost_x_years": {
        "one": "almost 1 year",
        "other": "almost %{count} years"
      },
      "half_a_minute": "half a minute",
      "less_than_x_minutes": {
        "one": "less than a minute",
        "other": "less than %{count} minutes"
      },
      "less_than_x_seconds": {
        "one": "less than 1 second",
        "other": "less than %{count} seconds"
      },
      "over_x_years": {
        "one": "over 1 year",
        "other": "over %{count} years"
      },
      "x_days": {
        "one": "1 day",
        "other": "%{count} days"
      },
      "x_minutes": {
        "one": "1 minute",
        "other": "%{count} minutes"
      },
      "x_months": {
        "one": "1 month",
        "other": "%{count} months"
      },
      "x_seconds": {
        "one": "1 second",
        "other": "%{count} seconds"
      },
      "x_years": {
        "one": "1 year",
        "other": "%{count} years"
      }
    },
    "prompts": {
      "day": "Day",
      "hour": "Hour",
      "minute": "Minute",
      "month": "Month",
      "second": "Second",
      "year": "Year"
    }
  },
  "days": {
    "friday": "Friday",
    "monday": "Monday",
    "saturday": "Saturday",
    "sunday": "Sunday",
    "thursday": "Thursday",
    "tuesday": "Tuesday",
    "wednesday": "Wednesday"
  },
  "devise": {
    "change_password": "Change my password",
    "change_password_error": "Password was not changed:",
    "characters_minimum": "characters minimum",
    "confirm_new_password": "Confirm new password",
    "confirmations": {
      "confirmed": "Your email address has been successfully confirmed.",
      "send_instructions": "You will receive an email with instructions for how to confirm your email address in a few minutes.",
      "send_paranoid_instructions": "If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."
    },
    "dnr_confirmation": "Didn't receive confirmation instructions?",
    "failure": {
      "already_authenticated": "You are already signed in.",
      "inactive": "Your account is not activated yet.",
      "invalid": "Invalid %{authentication_keys} or password.",
      "last_attempt": "You have one more attempt before your account is locked.",
      "locked": "Your account is locked.",
      "not_found_in_database": "Invalid %{authentication_keys} or password.",
      "timeout": "Your session expired. Please sign in again to continue.",
      "unauthenticated": "You need to sign in or sign up before continuing.",
      "unconfirmed": "You have to confirm your email address before continuing."
    },
    "forgot_password": "Forgot your password?",
    "mailer": {
      "confirmation_instructions": {
        "subject": "Confirmation instructions"
      },
      "email_changed": {
        "subject": "Email Changed"
      },
      "password_change": {
        "subject": "Password Changed"
      },
      "reset_password_instructions": {
        "subject": "Reset password instructions"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "new_password": "New password",
    "omniauth_callbacks": {
      "failure": "Could not authenticate you from %{kind} because \"%{reason}\".",
      "success": "Successfully authenticated from %{kind} account."
    },
    "passwords": {
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes.",
      "send_paranoid_instructions": "If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.",
      "updated": "Your password has been changed successfully. You are now signed in.",
      "updated_not_active": "Your password has been changed successfully."
    },
    "registrations": {
      "destroyed": "Bye! Your account has been successfully cancelled. We hope to see you again soon.",
      "signed_up": "Welcome! You have signed up successfully.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirmation link to confirm your new email address.",
      "updated": "Your account has been updated successfully.",
      "updated_but_not_signed_in": "Your account has been updated successfully, but since your password was changed, you need to sign in again"
    },
    "remember_me": "Remember me",
    "resend_ci": "Resend confirmation instructions",
    "reset_password_error": "Instruction was not sent:",
    "send_me_rpi": "Send me reset password instruction",
    "sessions": {
      "already_signed_out": "Signed out successfully.",
      "signed_in": "Signed in successfully.",
      "signed_out": "Signed out successfully."
    },
    "unlocks": {
      "send_instructions": "You will receive an email with instructions for how to unlock your account in a few minutes.",
      "send_paranoid_instructions": "If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.",
      "unlocked": "Your account has been unlocked successfully. Please sign in to continue."
    }
  },
  "errors": {
    "connection_refused": "Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "was already confirmed, please try signing in",
      "blank": "can't be blank",
      "confirmation": "doesn't match %{attribute}",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "can't be empty",
      "equal_to": "must be equal to %{count}",
      "even": "must be even",
      "exclusion": "is reserved",
      "expired": "has expired, please request a new one",
      "greater_than": "must be greater than %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "is not included in the list",
      "invalid": "is invalid",
      "less_than": "must be less than %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "model_invalid": "Validation failed: %{errors}",
      "not_a_number": "is not a number",
      "not_an_integer": "must be an integer",
      "not_found": "not found",
      "not_locked": "was not locked",
      "not_saved": {
        "one": "1 error prohibited this %{resource} from being saved:",
        "other": "%{count} errors prohibited this %{resource} from being saved:"
      },
      "odd": "must be odd",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "required": "must exist",
      "taken": "has already been taken",
      "too_long": {
        "one": "is too long (maximum is 1 character)",
        "other": "is too long (maximum is %{count} characters)"
      },
      "too_short": {
        "one": "is too short (minimum is 1 character)",
        "other": "is too short (minimum is %{count} characters)"
      },
      "wrong_length": {
        "one": "is the wrong length (should be 1 character)",
        "other": "is the wrong length (should be %{count} characters)"
      }
    },
    "template": {
      "body": "There were problems with the following fields:",
      "header": {
        "one": "1 error prohibited this %{model} from being saved",
        "other": "%{count} errors prohibited this %{model} from being saved"
      }
    },
    "unacceptable_request": "A supported version is expected in the Accept header.\n",
    "unavailable_session": "Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} was successfully created."
      },
      "destroy": {
        "alert": "%{resource_name} could not be destroyed.",
        "notice": "%{resource_name} was successfully destroyed."
      },
      "update": {
        "notice": "%{resource_name} was successfully updated."
      }
    }
  },
  "helpers": {
    "select": {
      "prompt": "Please select"
    },
    "submit": {
      "create": "Create %{model}",
      "submit": "Save %{model}",
      "update": "Update %{model}"
    }
  },
  "home": {
    "healthbook": "Healthbook"
  },
  "i18n": {
    "plural": {
      "keys": [
        "one",
        "other"
      ],
      "rule": "#<Proc:0x0000558cbd0cba80@/home/dv/.rvm/gems/ruby-2.6.6/gems/rails-i18n-6.0.0/lib/rails_i18n/common_pluralizations/one_other.rb:7 (lambda)>"
    }
  },
  "manager_bar": {
    "doctors": "Doctors",
    "patients": "Patients",
    "schedules": "Schedules",
    "visit_types": "Visit types",
    "visits": "Visits"
  },
  "nav_bar": {
    "contacts": "Contacts",
    "departments": "Departments",
    "log_in": "Log In",
    "log_out": "Log Out",
    "main": "Home",
    "news": "News",
    "sign_up": "Sign Up"
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%u%n",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "$"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": ".",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Billion",
          "million": "Million",
          "quadrillion": "Quadrillion",
          "thousand": "Thousand",
          "trillion": "Trillion",
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 3,
        "significant": true,
        "strip_insignificant_zeros": true
      },
      "storage_units": {
        "format": "%n %u",
        "units": {
          "byte": {
            "one": "Byte",
            "other": "Bytes"
          },
          "eb": "EB",
          "gb": "GB",
          "kb": "KB",
          "mb": "MB",
          "pb": "PB",
          "tb": "TB"
        }
      }
    },
    "nth": {
      "ordinalized": "#<Proc:0x0000558cbc803290@/home/dv/.rvm/gems/ruby-2.6.6/gems/activesupport-6.0.3.4/lib/active_support/locale/en.rb:26 (lambda)>",
      "ordinals": "#<Proc:0x0000558cbc8032e0@/home/dv/.rvm/gems/ruby-2.6.6/gems/activesupport-6.0.3.4/lib/active_support/locale/en.rb:7 (lambda)>"
    },
    "percentage": {
      "format": {
        "delimiter": "",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    }
  },
  "records": {
    "back": "Back",
    "delete": "Delete",
    "edit": "Edit",
    "show": "Show"
  },
  "support": {
    "array": {
      "last_word_connector": ", and ",
      "two_words_connector": " and ",
      "words_connector": ", "
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "pm"
  },
  "visit_types": {
    "Check-up": "Check-up",
    "Consultation": "Consultation"
  }
});
