
# Internalization methods supported by Sciter

## `Intl` namespace

These objects are partially supported by Sciter:

* `Intl.NumberFormat`
* `Intl.DateTimeFormat`
* `Intl.Collator`

### `Intl.NumberFormat`

* `constructor(lang:string,options:object)` 
  
  where:
  * `lang` is "xx" or "xx-yy" string - ISO identifier of language and optionally country variant, for example, "de-AT" is German in Austria.
  * `options` is `{ style: "currency" | "decimal"}` object. 
  
* `numberFormat.format(number): string`
  formats the number according to national rules.

### `Intl.DateTimeFormat`

* `constructor(lang:string,options:object)` 
  
  where:
  * `lang` is "xx" or "xx-yy" string - ISO identifier of language and optionally country variant, for example, "de-AT" is German in Austria.
  * `options` - not used in Sciter yet. 
  
* `dateTimeFormat.format(date: Date): string`
  formats the date according to national rules.

* `dateTimeFormat.monthView(year:int, month:int, options:object): string`
  

  Sciter specific. The method produces HTML that represents a month view similar to `<input type="calendar">`. 

  Where: _year_ is full year, _month_ is a number of month between `0` and `11` and _options_ is an object with the fields:

  * `today:Date` - optional, will mark that day by `.today` class;
  * `firstDayOfWeek:int` - optional, first day of week to use;
  * `dayOfWeekLength:int` - optional, length of week day name abbreviation;
  * `showWeekDays:bool` - optional, _true_ to show week days row;
  * `showMonth:bool` - optional, _true_ to show month name as a caption;
  * `showYear:bool` - optional, _true_ to show year in the caption;
  * `dayClass: function(day,month,year):string` - optional, function to generate additional classes to day cells. Function shall return dot separated class names like `.first.second`;
  * `dayContent: function(day,month,year):string` - optional, function to generate content of day cells. The function shall return full content of the day cell (inner HTML of `<td.day>`);


### `Intl.Collator`

* `constructor(lang:string,options:object)` 
  
  where:
  * `lang` is "xx" or "xx-yy" string - ISO identifier of language and optionally country variant, for example, "de-AT" is German in Austria.
  * `options` - is `{ sensitivity: "base" | "accent" | "case" | "variant" }` object. . 
  
* `collator.compare(a:string, b : string): -1 | 0 | +1`

  compares two strings.

## Methods of particular objects

### `date.toLocaleDateString([locale:string], [options])`

Convert date portion of the Date instance.

_options_ is an object that may contain: 
```js
{
  timeZone: "UTC", // optional, if provided treats date as UTC
  dateStyle: "short" | "long", // optional format date according to system settings,
  format: "...date format string...", // optional, see below
}
```

#### Date format fields:

The following table defines the format types used to represent days:

Format type | Meaning
----------- | -------
d | Day of the month as digits without leading zeros for single-digit days.
dd | Day of the month as digits with leading zeros for single-digit days.
ddd | Abbreviated day of the week, for example, "Mon" in English (United States). 
dddd | Day of the week.

The following table defines the format types used to represent months:

Format type | Meaning
----------- | -------
M | Month as digits without leading zeros for single-digit months.
MM | Month as digits with leading zeros for single-digit months.
MMM | Abbreviated month, for example, "Nov" in English (United States).
MMMM | Month, for example, "November" for English (United States), and "Noviembre" for Spanish (Spain).

The following table defines the format types used to represent years:

Format type | Meaning
----------- | -------
y | Year represented only by the last digit.
yy | Year represented only by the last two digits. A leading zero is added for single-digit years.
yyyy | Year represented by a full four or five digits, depending on the calendar used. Thai Buddhist and Korean calendars have five-digit years. The "yyyy" pattern shows five digits for these two calendars, and four digits for all other supported calendars. Calendars that have single-digit or two-digit years, such as for the Japanese Emperor era, are represented differently. A single-digit year is represented with a leading zero, for example, "03". A two-digit year is represented with two digits, for example, "13". No additional leading zeros are displayed.
yyyyy | Behaves identically to "yyyy".

The following table defines the format types used to represent a period or era.

Format type | Meaning
----------- | -------
g, gg | Period/era string formatted as specified by the CAL\_SERASTRING value. The "g" and "gg" format pictures in a date string are ignored if there is no associated era or period string.

### `date.toLocaleTimeString([locale:string], [options])`

Convert time portion of the Date instance to string.

_options_ is an object that may contain: 
```js
{
  timeZone: "UTC", // optional, if provided treats date as UTC
  timeStyle: "short" | "long", // optional format time according to system settings,
  format: "...time format string...", // optional, see below
}
```

#### Time format fields:

Format type | Meaning
----------- | -------
h | Hours with no leading zero for single-digit hours; 12-hour clock
hh | Hours with leading zero for single-digit hours; 12-hour clock
H | Hours with no leading zero for single-digit hours; 24-hour clock
HH | Hours with leading zero for single-digit hours; 24-hour clock
m | Minutes with no leading zero for single-digit minutes
mm | Minutes with leading zero for single-digit minutes
s | Seconds with no leading zero for single-digit seconds
ss | Seconds with leading zero for single-digit seconds
t | One character time marker string, such as A or P
tt | Multi-character time marker string, such as AM or PM

### `number.toLocaleString([locale:string], [options])`

Convert number to string.

_options_ is an object that may contain: 
```js
{
  style: "number" | "currency", // optional
  maximumFractionDigits: int, // optional, number of fractional digits
  currency: string, // optional, currency symbol
}
```

