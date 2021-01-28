import I18n from 'i18n-js';
I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {
});
I18n.translations["ru"] = I18n.extend((I18n.translations["ru"] || {}), {
});
I18n.translations["uk"] = I18n.extend((I18n.translations["uk"] || {}), {
  "account": {
    "are_you_sure": "Ви впевнені?",
    "current_password": "Поточний пароль",
    "delete_account": "Я хочу видатили обліковий запис",
    "doctor_profile": "Профіль лікаря",
    "edit_account": "Редагувати обліковий запис",
    "leave_blank": "залиште вільним, якщо не хочете змінювати",
    "my_schedules": "Мої розклади",
    "my_visits": "Мої візити",
    "need_password": "введіть поточний пароль, щоб підтвердити зміни",
    "not_saved": "Обліковий запис не був створений:",
    "patient_card": "Карточка пацієнта",
    "update": "Оновити",
    "waiting_confirmation": "Очікується підтвердження для"
  },
  "activerecord": {
    "attributes": {
      "schedules": {
        "create_schedule": "Зберегти розклад",
        "day": "День",
        "doctor": "Лікар",
        "edit_schedule": "Редагування розкладу",
        "end_date": "Дата кінця",
        "end_time": "Час кінця",
        "new_schedule": "Новий розклад",
        "no_schedules_message": "У Вас ще немає розкладів",
        "schedules": "Розклади",
        "start_date": "Дата початку",
        "start_time": "Час початку",
        "visit_type": "Тип візиту"
      },
      "users": {
        "email": "Електронна скринька",
        "is_active": "Активний",
        "name": "Ім'я",
        "password": "Пароль",
        "password_confirmation": "Підтвердження пароля",
        "phone_number": "Номер телефону",
        "registration_date": "Дата реєстрації",
        "role": "Роль",
        "surname": "Прізвище"
      },
      "visit_types": {
        "create_visit_type": "Зберегти тип візиту",
        "description": "Опис",
        "duration": "Тривалість",
        "edit_visit_type": "Редагування типу візиту",
        "minutes": "хвилин",
        "name": "Назва",
        "new_visit_type": "Новий тип візиту",
        "visit_types": "Типи візитів"
      },
      "visits": {
        "create_visit": "Створити візит",
        "date": "Дата",
        "doctor": "Лікар",
        "new_visit": "Новий візит",
        "no_visits_message": "У Вас ще немає візитів",
        "patient": "Пацієнт",
        "time": "Час",
        "visit_type": "Тип візиту",
        "visits": "Візити"
      }
    },
    "errors": {
      "messages": {
        "record_invalid": "Виникли помилки: %{errors}",
        "restrict_dependent_destroy": {
          "has_many": "Неможливо видалити запис, так як існують залежності: %{record}",
          "has_one": "Неможливо видалити запис, так як існує залежність: %{record}"
        }
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "нд.",
      "пн.",
      "вт.",
      "ср.",
      "чт.",
      "пт.",
      "сб."
    ],
    "abbr_month_names": [
      null,
      "січ.",
      "лют.",
      "бер.",
      "квіт.",
      "трав.",
      "черв.",
      "лип.",
      "серп.",
      "вер.",
      "жовт.",
      "лист.",
      "груд."
    ],
    "day_names": [
      "неділя",
      "понеділок",
      "вівторок",
      "середа",
      "четвер",
      "п'ятниця",
      "субота"
    ],
    "formats": {
      "default": "%d.%m.%Y",
      "long": "%d %B %Y",
      "short": "%d %b"
    },
    "month_names": [
      null,
      "Січня",
      "Лютого",
      "Березня",
      "Квітня",
      "Травня",
      "Червня",
      "Липня",
      "Серпня",
      "Вересня",
      "Жовтня",
      "Листопада",
      "Грудня"
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
        "few": "близько %{count} години",
        "many": "близько %{count} годин",
        "one": "близько %{count} година",
        "other": "близько %{count} години"
      },
      "about_x_months": {
        "few": "близько %{count} місяців",
        "many": "близько %{count} місяців",
        "one": "близько %{count} місяця",
        "other": "близько %{count} місяця"
      },
      "about_x_years": {
        "few": "близько %{count} років",
        "many": "близько %{count} років",
        "one": "близько %{count} року",
        "other": "близько %{count} року"
      },
      "almost_x_years": {
        "few": "майже %{count} років",
        "many": "майже %{count} років",
        "one": "майже %{count} роки",
        "other": "майже %{count} років"
      },
      "half_a_minute": "пів хвилини",
      "less_than_x_minutes": {
        "few": "менше %{count} хвилин",
        "many": "менше %{count} хвилин",
        "one": "менше %{count} хвилини",
        "other": "менше %{count} хвилини"
      },
      "less_than_x_seconds": {
        "few": "менше %{count} секунд",
        "many": "менше %{count} секунд",
        "one": "менше %{count} секунди",
        "other": "менше %{count} секунди"
      },
      "over_x_years": {
        "few": "більше %{count} років",
        "many": "більше %{count} років",
        "one": "більше %{count} року",
        "other": "більше %{count} року"
      },
      "x_days": {
        "few": "%{count} дні",
        "many": "%{count} днів",
        "one": "%{count} день",
        "other": "%{count} дня"
      },
      "x_minutes": {
        "few": "%{count} хвилини",
        "many": "%{count} хвилин",
        "one": "%{count} хвилина",
        "other": "%{count} хвилини"
      },
      "x_months": {
        "few": "%{count} місяці",
        "many": "%{count} місяців",
        "one": "%{count} місяць",
        "other": "%{count} місяця"
      },
      "x_seconds": {
        "few": "%{count} секунди",
        "many": "%{count} секунд",
        "one": "%{count} секунда",
        "other": "%{count} секунди"
      },
      "x_years": {
        "few": "%{count} роки",
        "many": "%{count} років",
        "one": "%{count} рік",
        "other": "%{count} року"
      }
    },
    "prompts": {
      "day": "День",
      "hour": "Година",
      "minute": "Хвилина",
      "month": "Місяць",
      "second": "Секунда",
      "year": "Рік"
    }
  },
  "days": {
    "friday": "П'ятниця",
    "monday": "Понеділок",
    "saturday": "Субота",
    "sunday": "Неділя",
    "thursday": "Четвер",
    "tuesday": "Вівторок",
    "wednesday": "Середа"
  },
  "devise": {
    "change_password": "Змінити пароль",
    "change_password_error": "Пароль не був змінений:",
    "characters_minimum": "символів мінімум",
    "confirm_new_password": "Підтвердіть новий пароль",
    "confirmations": {
      "confirmed": "Ваш обліковий запис було успішно підтверджено.",
      "send_instructions": "На Ваш email надіслано інструкції з підтвердження облікового запису.",
      "send_paranoid_instructions": "Якщо Ваш email існує у нашій базі даних, Вам надіслано інструкції з підтвердження облікового запису."
    },
    "dnr_confirmation": "Не отримали підтвердження?",
    "failure": {
      "already_authenticated": "Ви вже увійшли.",
      "inactive": "Ваш обліковий запис ще не було активовано.",
      "invalid": "Невірний %{authentication_keys} або пароль.",
      "last_attempt": "У вас є ще одна спроба, перш ніж ваш обліковий запис буде заблокований.",
      "locked": "Ваш обліковий запис заблоковано.",
      "not_found_in_database": "Невірний %{authentication_keys} або пароль.",
      "timeout": "Час вашої сесії вичерпано. Увійдіть знову для продовження, будь ласка.",
      "unauthenticated": "Ви маєте увійти або зареєструватися.",
      "unconfirmed": "Ви маєте підтвердити Ваш обліковий запис, перш ніж продовжити."
    },
    "forgot_password": "Забули пароль?",
    "mailer": {
      "confirmation_instructions": {
        "subject": "Інструкції з підтвердження облікового запису."
      },
      "password_change": {
        "subject": "Пароль був змінений."
      },
      "reset_password_instructions": {
        "subject": "Інструкції з відновлення пароля."
      },
      "unlock_instructions": {
        "subject": "Інструкції з розблокування облікового запису"
      }
    },
    "new_password": "Новий пароль",
    "omniauth_callbacks": {
      "failure": "Неможливо увійти з облікового запису %{kind} через те, що обліковий запис \"%{reason}\".",
      "success": "Вхід успішний з облікового запису %{kind}."
    },
    "passwords": {
      "no_token": "Ця сторінка доступна тільки при переході з email для скидання пароля. Якщо Ви перейшли з листа, будь ласка, переконайтеся, що ви використовували повний URL.",
      "send_instructions": "Ви отримаєте інструкції зі скидання паролю через декілька хвилин.",
      "send_paranoid_instructions": "Ваш email існує у нашій базі даних, Вам надіслано посилання для відновлення вашого паролю.",
      "updated": "Ваш пароль було успішно змінено.",
      "updated_not_active": "Ваш пароль було успішно змінено."
    },
    "registrations": {
      "destroyed": "До побачення! Ваш обліковий запис було успішно закрито. Сподіваємось незабаром побачитись з Вами знову.",
      "signed_up": "Вітаємо! Ви успішно зареєструвалися.",
      "signed_up_but_inactive": "Ви успішно зареєструвалися. Тим не менш, ви не можете увійти, тому що ваш обліковий запис ще не активовано.",
      "signed_up_but_locked": "Ви успішно зареєструвалися. Тим не менш, ви не можете увійти, тому що ваш обліковий запис заблокований.",
      "signed_up_but_unconfirmed": "Протягом декількох хвилин ви отримаєте лист з інструкціями з підтвердження вашого облікового запису.",
      "update_needs_confirmation": "Ваш аккаунт успішно оновлений, необходімо підтвердити Вашу нову email адресу. Будь ласка, перевірте свою електронну пошту і натисніть на лінк \"Підтвердити\", щоб завершити оновлення email.",
      "updated": "Ви успішно оновили свій обліковий запис."
    },
    "remember_me": "Запам'ятати мене",
    "resend_ci": "Повторно надіслати підтвердження раєстрації",
    "reset_password_error": "Інструкція не була відправлена:",
    "send_me_rpi": "Надіслати інструкцію для відновлення паролю",
    "sessions": {
      "already_signed_out": "Вихід успішний.",
      "signed_in": "Вхід успішний.",
      "signed_out": "Вихід успішний."
    },
    "unlocks": {
      "send_instructions": "Протягом декількох хвилин на Ваш email буде надіслано інструкції з розблокування облікового запису.",
      "send_paranoid_instructions": "Якщо ваш обліковий запис існує, то ви отримаєте повідомлення електронної пошти з інструкціями, як розблокувати його протягом декількох хвилин.",
      "unlocked": "Ваш обліковий запис було успішно розблоковано."
    }
  },
  "errors": {
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "має бути прийнятий",
      "already_confirmed": "вже було підтверджено, спробуйте увійти",
      "blank": "не може бути пустим",
      "confirmation": "не збігається з підтвердженням",
      "confirmation_period_expired": "повинен бути підтверджений протягом періоду %{period}, будь ласка, запитайте підтвердження ще раз",
      "empty": "не може бути порожнім",
      "equal_to": "має дорівнювати %{count}",
      "even": "має бути парним",
      "exclusion": "зарезервовано",
      "expired": "прострочено, створіть новий",
      "greater_than": "має бути більше ніж %{count}",
      "greater_than_or_equal_to": "має бути більше ніж або дорівнювати %{count}",
      "inclusion": "не включено до переліку",
      "invalid": "недійсний",
      "less_than": "має бути менше ніж %{count}",
      "less_than_or_equal_to": "має бути менше ніж або дорівнювати %{count}",
      "model_invalid": "Виникли помилки: %{errors}",
      "not_a_number": "не число",
      "not_an_integer": "не є цілим числом",
      "not_found": "не знайдено",
      "not_locked": "не було заблоковано",
      "not_saved": {
        "one": "%{resource}: Виникла помилка (загалом - %{count}), через яку неможливо зберегти зміни.",
        "other": "%{resource}: Виникли помилки (загалом - %{count}), через які неможливо зберегти зміни."
      },
      "odd": "має бути непарним",
      "other_than": "має відрізнятись від %{count}",
      "present": "має бути пустим",
      "required": "не може бути порожнім",
      "taken": "вже зайнятий",
      "too_long": {
        "few": "занадто довгий (максимум %{count} знаки)",
        "many": "занадто довгий (максимум %{count} знаків)",
        "one": "занадто довгий (максимум %{count} знак)",
        "other": "занадто довгий (максимум %{count} знаку)"
      },
      "too_short": {
        "few": "занадто короткий (мінімум %{count} знаки)",
        "many": "занадто короткий (мінімум %{count} знаків)",
        "one": "занадто короткий (мінімум %{count} знак)",
        "other": "занадто короткий (мінімум %{count} знаку)"
      },
      "wrong_length": {
        "few": "неправильна довжина (має бути %{count} знаки)",
        "many": "неправильна довжина (має бути %{count} знаків)",
        "one": "неправильна довжина (має бути %{count} знак)",
        "other": "неправильна довжина (має бути %{count} знаку)"
      }
    },
    "template": {
      "body": "Помилки виявлено в таких полях:",
      "header": {
        "few": "%{model} не збережено через %{count} помилки",
        "many": "%{model} не збережено через %{count} помилок",
        "one": "%{model} не збережено через %{count} помилку",
        "other": "%{model} не збережено через %{count} помилки"
      }
    }
  },
  "helpers": {
    "select": {
      "prompt": "Оберіть: "
    },
    "submit": {
      "create": "Створити %{model}",
      "submit": "Зберегти %{model}",
      "update": "Зберегти %{model}"
    }
  },
  "home": {
    "describe_1": "Переглядайте лікарів онлайн і записуйтеся до них.",
    "describe_2": "Вхід здійснюється через створений вами обліковий запис або за допомогою консультанта.",
    "describe_3": "Рекомендується надати достовірну інформацію про ваші хронічні захворювання і алергії, щоб ми могли надати вам якісну першу медичну допомогу.",
    "healthbook": "Healthbook",
    "left_down_h2": "Новинка!",
    "left_down_h4_1": "Ми створили програму лояльності, яка передбачає -10% на всі медичні послуги в нашій клініці.",
    "left_down_h4_2": "Заходьте і отримайте карту БЕЗКОШТОВНО!",
    "left_down_h4_3": "Ми чекаємо вас!",
    "rigth_up_first": "З повагою до вас, ми докладаємо всіх зусиль для надання якісних медичних послуг.",
    "rigth_up_second_p1": "ПОТРІБНА ДОПОМОГА?",
    "rigth_up_second_p2": "Ми з радістю відповімо на будь-які питання з надання медичних послуг і надамо актуальну інформацію про ваше здоров'я.",
    "rigth_up_third_p1": "Чекаємо ваших повідомлень на ",
    "rigth_up_third_p2": " або напишіть тут свій номер і ми вам передзвонимо."
  },
  "i18n": {
    "plural": {
      "keys": [
        "one",
        "few",
        "many",
        "other"
      ],
      "rule": "#<Proc:0x000055b8623fc148@/home/dv/.rvm/gems/ruby-2.6.6/gems/rails-i18n-6.0.0/lib/rails_i18n/common_pluralizations/east_slavic.rb:16 (lambda)>"
    },
    "transliterate": {
      "rule": "#<Proc:0x000055b862861a58@/home/dv/.rvm/gems/ruby-2.6.6/gems/rails-i18n-6.0.0/lib/rails_i18n/../../rails/transliteration/uk.rb:8 (lambda)>"
    }
  },
  "manager_bar": {
    "doctors": "Лікарі",
    "patients": "Пацієнти",
    "schedules": "Розклади",
    "visit_types": "Типи візитів",
    "visits": "Візити"
  },
  "nav_bar": {
    "contacts": "Контакти",
    "departments": "Відділення",
    "log_in": "Увійти",
    "log_out": "Вийти",
    "main": "Головна",
    "news": "Новини",
    "sign_up": "Реєстрація"
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
        "unit": "грн."
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
          /*
          "billion": {
            "few": "Мільярдів",
            "many": "Мільярдів",
            "one": "Мільярд",
            "other": "Мільярдів"
          },
          "million": {
            "few": "Мільйонів",
            "many": "Мільйонів",
            "one": "Мільйон",
            "other": "Мільйонів"
          },
          "quadrillion": {
            "few": "Квадрильйонів",
            "many": "Квадрильйонів",
            "one": "Квадрильйон",
            "other": "Квадрильйонів"
          },
          "thousand": {
            "few": "Тисяч",
            "many": "Тисяч",
            "one": "Тисяча",
            "other": "Тисяч"
          },
          "trillion": {
            "few": "Трильйонів",
            "many": "Трильйонів",
            "one": "Трильйон",
            "other": "Трильйонів"
          },
          */
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
            "few": "байти",
            "many": "байтів",
            "one": "байт",
            "other": "байту"
          },
          "gb": "ГБ",
          "kb": "кБ",
          "mb": "МБ",
          "tb": "ТБ"
        }
      }
    },
    "percentage": {
      "format": {
        "delimiter": ""
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    }
  },
  "records": {
    "back": "Назад",
    "delete": "Видалити",
    "edit": "Редагувати",
    "show": "Переглянути"
  },
  "support": {
    "array": {
      "last_word_connector": " та ",
      "two_words_connector": " і ",
      "words_connector": ", "
    }
  },
  "time": {
    "am": "до полудня",
    "formats": {
      "default": "%a, %d %b %Y, %H:%M:%S %z",
      "long": "%d %B %Y, %H:%M",
      "short": "%d %b, %H:%M"
    },
    "pm": "по полудні"
  },
  "visit_types": {
    "Check-up": "Огляд",
    "Consultation": "Консультація"
  }
});
