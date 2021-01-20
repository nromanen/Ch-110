import I18n from 'i18n-js';
I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {
});
I18n.translations["ru"] = I18n.extend((I18n.translations["ru"] || {}), {
  "account": {
    "are_you_sure": "Вы уверенны?",
    "current_password": "Текущий пароль",
    "delete_account": "Я хочу удалить учетную запись",
    "doctor_profile": "Профиль доктора",
    "edit_account": "Редактировать учетную запись",
    "leave_blank": "оставте пустым, если не хотите изменять",
    "need_password": "введите текущий пароль, чтобы подтвердить изменения",
    "patient_card": "Карточка пациента",
    "update": "Обновить",
    "waiting_confirmation": "Ожидается подтверждение для"
  },
  "activerecord": {
    "attributes": {
      "users": {
        "email": "Электронная почта",
        "is_active": "Активный",
        "name": "Имя",
        "password": "Пароль",
        "password_confirmation": "Подтверждение пароля",
        "phone_number": "Номер телефона",
        "role": "Роль",
        "surname": "Фамилия"
      }
    },
    "errors": {
      "messages": {
        "record_invalid": "Возникли ошибки: %{errors}",
        "restrict_dependent_destroy": {
          "has_many": "Невозможно удалить запись, так как существуют зависимости: %{record}",
          "has_one": "Невозможно удалить запись, так как существует зависимость: %{record}"
        }
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "Вс",
      "Пн",
      "Вт",
      "Ср",
      "Чт",
      "Пт",
      "Сб"
    ],
    "abbr_month_names": [
      null,
      "янв.",
      "февр.",
      "марта",
      "апр.",
      "мая",
      "июня",
      "июля",
      "авг.",
      "сент.",
      "окт.",
      "нояб.",
      "дек."
    ],
    "day_names": [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота"
    ],
    "formats": {
      "default": "%d.%m.%Y",
      "long": "%-d %B %Y",
      "short": "%-d %b"
    },
    "month_names": [
      null,
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря"
    ],
    "order": [
      "day",
      "month",
      "year"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "few": "около %{count} часов",
        "many": "около %{count} часов",
        "one": "около %{count} часа",
        "other": "около %{count} часа"
      },
      "about_x_months": {
        "few": "около %{count} месяцев",
        "many": "около %{count} месяцев",
        "one": "около %{count} месяца",
        "other": "около %{count} месяца"
      },
      "about_x_years": {
        "few": "около %{count} лет",
        "many": "около %{count} лет",
        "one": "около %{count} года",
        "other": "около %{count} лет"
      },
      "almost_x_years": {
        "few": "почти %{count} года",
        "many": "почти %{count} лет",
        "one": "почти 1 год",
        "other": "почти %{count} лет"
      },
      "half_a_minute": "полминуты",
      "less_than_x_minutes": {
        "few": "меньше %{count} минут",
        "many": "меньше %{count} минут",
        "one": "меньше %{count} минуты",
        "other": "меньше %{count} минуты"
      },
      "less_than_x_seconds": {
        "few": "меньше %{count} секунд",
        "many": "меньше %{count} секунд",
        "one": "меньше %{count} секунды",
        "other": "меньше %{count} секунды"
      },
      "over_x_years": {
        "few": "больше %{count} лет",
        "many": "больше %{count} лет",
        "one": "больше %{count} года",
        "other": "больше %{count} лет"
      },
      "x_days": {
        "few": "%{count} дня",
        "many": "%{count} дней",
        "one": "%{count} день",
        "other": "%{count} дня"
      },
      "x_minutes": {
        "few": "%{count} минуты",
        "many": "%{count} минут",
        "one": "%{count} минуту",
        "other": "%{count} минуты"
      },
      "x_months": {
        "few": "%{count} месяца",
        "many": "%{count} месяцев",
        "one": "%{count} месяц",
        "other": "%{count} месяца"
      },
      "x_seconds": {
        "few": "%{count} секунды",
        "many": "%{count} секунд",
        "one": "%{count} секунду",
        "other": "%{count} секунды"
      },
      "x_years": {
        "few": "%{count} года",
        "many": "%{count} лет",
        "one": "%{count} год",
        "other": "%{count} года"
      }
    },
    "prompts": {
      "day": "День",
      "hour": "Часов",
      "minute": "Минут",
      "month": "Месяц",
      "second": "Секунд",
      "year": "Год"
    }
  },
  "devise": {
    "change_password": "Сменить пароль",
    "characters_minimum": "символов минимум",
    "confirmations": {
      "confirmed": "Ваша учётная запись успешно подтверждена.",
      "send_instructions": "В течение нескольких минут вы получите письмо с инструкциями по подтверждению вашей учётной записи.",
      "send_paranoid_instructions": "Если ваш адрес email есть в нашей базе данных, то в течение нескольких минут вы получите письмо с инструкциями по подтверждению вашей учётной записи."
    },
    "dnr_confirmation": "Не пришло подтверждение?",
    "failure": {
      "already_authenticated": "Вы уже вошли в систему.",
      "inactive": "Ваша учётная запись ещё не активирована.",
      "invalid": "Неверный %{authentication_keys} или пароль.",
      "last_attempt": "У Вас осталась еще одна попытка ввести пароль до блокировки.",
      "locked": "Ваша учётная запись заблокирована.",
      "not_found_in_database": "Неверный %{authentication_keys} или пароль.",
      "timeout": "Ваш сеанс закончился. Пожалуйста, войдите в систему снова.",
      "unauthenticated": "Вам необходимо войти в систему или зарегистрироваться.",
      "unconfirmed": "Вы должны подтвердить вашу учётную запись."
    },
    "forgot_password": "Забыли пароль?",
    "mailer": {
      "confirmation_instructions": {
        "subject": "Инструкции по подтверждению учётной записи."
      },
      "email_changed": {
        "subject": "Еmail адрес был изменён."
      },
      "password_change": {
        "subject": "Пароль был изменён."
      },
      "reset_password_instructions": {
        "subject": "Инструкции по восстановлению пароля."
      },
      "unlock_instructions": {
        "subject": "Инструкции по разблокировке учётной записи."
      }
    },
    "new_password": "Новый пароль",
    "omniauth_callbacks": {
      "failure": "Вы не можете войти в систему с учётной записью из %{kind}, так как \"%{reason}\".",
      "success": "Вход в систему выполнен с учётной записью из %{kind}."
    },
    "passwords": {
      "no_token": "Эта страница доступна только при переходе с email для сброса пароля. Если Вы перешли по ссылке из письма, пожалуйста, убедитесь, что вы использовали полный URL.",
      "send_instructions": "В течение нескольких минут вы получите письмо с инструкциями по восстановлению вашего пароля.",
      "send_paranoid_instructions": "Если ваш адрес email есть в нашей базе данных, то в течение нескольких минут Вы получите письмо с инструкциями по восстановлению вашего пароля.",
      "updated": "Ваш пароль успешно изменён. Теперь вы вошли в систему.",
      "updated_not_active": "Пароль успешно изменён."
    },
    "registrations": {
      "destroyed": "До свидания! Ваша учётная запись успешно удалена. Надеемся снова увидеть вас.",
      "signed_up": "Добро пожаловать! Вы успешно зарегистрировались.",
      "signed_up_but_inactive": "Вы успешно зарегистрировались. Тем не менее, вы не можете войти, потому что ваша учетная запись ещё не активирована.",
      "signed_up_but_locked": "Вы успешно зарегистрировались. Тем не менее, вы не можете войти, потому что ваша учетная запись заблокирована.",
      "signed_up_but_unconfirmed": "В течение нескольких минут вы получите письмо с инструкциями по подтверждению вашей учётной записи.",
      "update_needs_confirmation": "Ваш аккаунт успешно обновлен, нонеобходимо подтвердить Ваш новый адрес email. Пожалуйста, проверьте свою электронную почту и нажмите на ссылку \"Подтвердить\", чтобы завершить обновления email.",
      "updated": "Ваша учётная запись успешно изменена.",
      "updated_but_not_signed_in": "Ваш аккаунт успешно изменен, но так как ваш пароль изменился, нужно войти снова."
    },
    "remember_me": "Запомнить меня",
    "resend_ci": "Повторно отправить подтверждение регистрации",
    "send_me_rpi": "Отправить письмо для восстановления пароля",
    "sessions": {
      "already_signed_out": "Выход из системы выполнен.",
      "signed_in": "Вход в систему выполнен.",
      "signed_out": "Выход из системы выполнен."
    },
    "unlocks": {
      "send_instructions": "В течение нескольких минут вы получите письмо с инструкциями по разблокировке вашей учётной записи.",
      "send_paranoid_instructions": "Если ваша учётная запись существует, то в течение нескольких минут вы получите письмо с инструкциями по её разблокировке.",
      "unlocked": "Ваша учётная запись разблокирована. Теперь вы вошли в систему."
    }
  },
  "errors": {
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "нужно подтвердить",
      "already_confirmed": "уже подтверждена. Пожалуйста, попробуйте войти в систему",
      "blank": "не может быть пустым",
      "confirmation": "не совпадает со значением поля %{attribute}",
      "confirmation_period_expired": "должен быть подтвержден в течении %{period}, пожалуйста, запросите подтверждение ещё раз",
      "empty": "не может быть пустым",
      "equal_to": "может иметь лишь значение, равное %{count}",
      "even": "может иметь лишь четное значение",
      "exclusion": "имеет зарезервированное значение",
      "expired": "устарела. Пожалуйста, запросите новую",
      "greater_than": "может иметь значение большее %{count}",
      "greater_than_or_equal_to": "может иметь значение большее или равное %{count}",
      "inclusion": "имеет непредусмотренное значение",
      "invalid": "имеет неверное значение",
      "less_than": "может иметь значение меньшее чем %{count}",
      "less_than_or_equal_to": "может иметь значение меньшее или равное %{count}",
      "model_invalid": "Возникли ошибки: %{errors}",
      "not_a_number": "не является числом",
      "not_an_integer": "не является целым числом",
      "not_found": "не найдена",
      "not_locked": "не заблокирована",
      "not_saved": {
        "few": "%{resource}: сохранение не удалось из-за %{count} ошибок",
        "many": "%{resource}: сохранение не удалось из-за %{count} ошибок",
        "one": "%{resource}: сохранение не удалось из-за %{count} ошибки",
        "other": "%{resource}: сохранение не удалось из-за %{count} ошибки"
      },
      "odd": "может иметь лишь нечетное значение",
      "other_than": "должно отличаться от %{count}",
      "present": "нужно оставить пустым",
      "required": "не может отсутствовать",
      "taken": "уже существует",
      "too_long": {
        "few": "слишком большой длины (не может быть больше чем %{count} символа)",
        "many": "слишком большой длины (не может быть больше чем %{count} символов)",
        "one": "слишком большой длины (не может быть больше чем %{count} символ)",
        "other": "слишком большой длины (не может быть больше чем %{count} символа)"
      },
      "too_short": {
        "few": "недостаточной длины (не может быть меньше %{count} символов)",
        "many": "недостаточной длины (не может быть меньше %{count} символов)",
        "one": "недостаточной длины (не может быть меньше %{count} символа)",
        "other": "недостаточной длины (не может быть меньше %{count} символа)"
      },
      "wrong_length": {
        "few": "неверной длины (может быть длиной ровно %{count} символа)",
        "many": "неверной длины (может быть длиной ровно %{count} символов)",
        "one": "неверной длины (может быть длиной ровно %{count} символ)",
        "other": "неверной длины (может быть длиной ровно %{count} символа)"
      }
    },
    "template": {
      "body": "Проблемы возникли со следующими полями:",
      "header": {
        "few": "%{model}: сохранение не удалось из-за %{count} ошибок",
        "many": "%{model}: сохранение не удалось из-за %{count} ошибок",
        "one": "%{model}: сохранение не удалось из-за %{count} ошибки",
        "other": "%{model}: сохранение не удалось из-за %{count} ошибки"
      }
    }
  },
  "helpers": {
    "select": {
      "prompt": "Выберите: "
    },
    "submit": {
      "create": "Создать %{model}",
      "submit": "Сохранить %{model}",
      "update": "Сохранить %{model}"
    }
  },
  "i18n": {
    "plural": {
      "keys": [
        "one",
        "few",
        "many",
        "other"
      ],
      "rule": "#<Proc:0x000056227409d5c0@/home/dv/.rvm/gems/ruby-2.6.6/gems/rails-i18n-6.0.0/lib/rails_i18n/common_pluralizations/east_slavic.rb:16 (lambda)>"
    },
    "transliterate": {
      "rule": "#<Proc:0x00005622740f10d0@/home/dv/.rvm/gems/ruby-2.6.6/gems/rails-i18n-6.0.0/lib/rails_i18n/../../rails/transliteration/ru.rb:11 (lambda)>"
    }
  },
  "nav_bar": {
    "contacts": "Контакты",
    "departments": "Отделения",
    "log_in": "Войти",
    "log_out": "Выйти",
    "main": "Главная",
    "news": "Новости",
    "sign_up": "Регистрация"
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": " ",
        "format": "%n %u",
        "precision": 2,
        "separator": ",",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "руб."
      }
    },
    "format": {
      "delimiter": " ",
      "precision": 3,
      "separator": ",",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 1,
        "significant": false,
        "strip_insignificant_zeros": false
      },
      "storage_units": {
        "format": "%n %u",
        "units": {
          "byte": {
            "few": "байта",
            "many": "байт",
            "one": "байт",
            "other": "байта"
          },
          "eb": "ЭБ",
          "gb": "ГБ",
          "kb": "КБ",
          "mb": "МБ",
          "pb": "ПБ",
          "tb": "ТБ"
        }
      }
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
  "support": {
    "array": {
      "last_word_connector": " и ",
      "two_words_connector": " и ",
      "words_connector": ", "
    }
  },
  "time": {
    "am": "утра",
    "formats": {
      "default": "%a, %d %b %Y, %H:%M:%S %z",
      "long": "%d %B %Y, %H:%M",
      "short": "%d %b, %H:%M"
    },
    "pm": "вечера"
  }
});
I18n.translations["uk"] = I18n.extend((I18n.translations["uk"] || {}), {
});
