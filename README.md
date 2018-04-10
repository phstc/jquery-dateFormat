jquery-dateFormat - jQuery Plugin to format Date outputs using JavaScript - ***Having less than 5kb, jquery-dateFormat is the smallest date format library available!***

[![build passing](https://travis-ci.org/phstc/jquery-dateFormat.png "build passing")](http://travis-ci.org/phstc/jquery-dateFormat)

# Installation

Download latest jquery.dateFormat.js or jquery.dateFormat.min.js.

* [jquery-dateFormat.js](https://raw.githubusercontent.com/phstc/jquery-dateFormat/master/dist/jquery-dateformat.js)
* [jquery-dateFormat.min.js](https://raw.githubusercontent.com/phstc/jquery-dateFormat/master/dist/dateFormat.min.js)
* [dateFormat.js](https://raw.github.com/phstc/jquery-dateFormat/master/dist/dateFormat.js) (pure Javascript, no jQuery dependency)
* [dateFormat.min.js](https://raw.github.com/phstc/jquery-dateFormat/master/dist/dateFormat.min.js) (pure Javascript, no jQuery dependency)

You can use **jquery-dateFormat without jQuery**. You just need to import the dateFormat.js above and instead of formatting with `$.format(...)` you should use `DateFormat.format(...)`.

If you use **jQuery Validate** plugin you must use jquery-dateFormat without jQuery.

# Format patterns

The patterns to formatting are based on [java.text.SimpleDateFormat](http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html).

## Date and time patterns

* yy = short year
* yyyy = long year
* M = month (1-12)
* MM = month (01-12)
* MMM = month abbreviation (Jan, Feb ... Dec)
* MMMM = long month (January, February ... December)
* d = day (1 - 31)
* dd = day (01 - 31)
* ddd = day of the week in words (Monday, Tuesday ... Sunday)
* E = short day of the week in words (Mon, Tue ... Sun)
* D - Ordinal day (1st, 2nd, 3rd, 21st, 22nd, 23rd, 31st, 4th...)
* h = hour in am/pm (0-12)
* hh = hour in am/pm (00-12)
* H = hour in day (0-23)
* HH = hour in day (00-23)
* mm = minute
* ss = second
* SSS = milliseconds
* a = AM/PM marker
* p = a.m./p.m. marker

# Expected input dates formats

* 1982-10-15T01:10:20+02:00
* 1982-10-15T01:10:20Z
* Thu Oct 15 01:10:20 CET 1982
* 1982-10-15 01:10:20.546
* Thu Oct 15 1982 01:10:20 GMT-0800 (PST)
* Thu Oct 15 1982 01:10:20 GMT+0800 (China Standard Time)
* Thu Oct 15 1982 01:10:20 GMT+0200 (W. Europe Daylight Time)
* 1982-10-15CET01:10:20
* JavaScript: new Date().getTime()

[Some examples](https://github.com/phstc/jquery-dateFormat/blob/master/test/format_parse_date_spec.js).

# Usage
```javascript
 <script>
   document.write($.format.date("2009-12-18 10:54:50.546", "Test: dd/MM/yyyy"));
   document.write($.format.date("Wed Jan 13 10:43:41 CET 2010", "dd~MM~yyyy"));
 </script>
```
**Output**
```
 => Test: 18/12/2009
 => 13~01~2010
```

## Formatting using css classes
```html
  <span class="shortDateFormat">2009-12-18 10:54:50.546</span>
  <span class="longDateFormat">2009-12-18 10:54:50.546</span>
```
```javascript
  jQuery(function() {
      var shortDateFormat = 'dd/MM/yyyy';
      var longDateFormat  = 'dd/MM/yyyy HH:mm:ss';

      jQuery(".shortDateFormat").each(function (idx, elem) {
          if (jQuery(elem).is(":input")) {
              jQuery(elem).val(jQuery.format.date(jQuery(elem).val(), shortDateFormat));
          } else {
              jQuery(elem).text(jQuery.format.date(jQuery(elem).text(), shortDateFormat));
          }
      });
      jQuery(".longDateFormat").each(function (idx, elem) {
          if (jQuery(elem).is(":input")) {
              jQuery(elem).val(jQuery.format.date(jQuery(elem).val(), longDateFormat));
          } else {
              jQuery(elem).text(jQuery.format.date(jQuery(elem).text(), longDateFormat));
          }
      });
  });
```
**Output**
```
 => 18/12/2009
 => 18/12/2009 10:54:50
```

## Pretty date formatting

`jQuery.format.prettyDate(value)` returns a string representing how long ago the date represents

* value = String representing ISO time or date in milliseconds or javascript Date object
```javascript
 jQuery.format.prettyDate(new Date())             // => "just now"
 jQuery.format.prettyDate(new Date().getTime())   // => "just now"
 jQuery.format.prettyDate("2008-01-28T20:24:17Z") // => "2 hours ago"
 jQuery.format.prettyDate("2008-01-27T22:24:17Z") // => "Yesterday"
 jQuery.format.prettyDate("2008-01-26T22:24:17Z") // => "2 days ago"
 jQuery.format.prettyDate("2008-01-14T22:24:17Z") // => "2 weeks ago"
 jQuery.format.prettyDate("2007-12-15T22:24:17Z") // => "10 years and 5 months ago"
```

## toBrowserTimeZone

`jQuery.format.toBrowserTimeZone(value, format)` converts into browsers timezone.

* value = String representing date in ISO time ("2013-09-14T23:22:33Z") or String representing default JAXB formatting of `java.util.Date` ("2013-09-14T16:22:33.527-07:00") or String representing Unix Timestamp (Sat Sep 14 2013 16:22:33 GMT-0700 (PDT)) or javascript date object.
* format = All input formats valid for `jQuery.format.date` are valid for this method. The defaut format is MM/dd/yyyy HH:mm:ss.

### Valid input formats
```javascript
 var date1 = "2013-09-14T23:22:33Z";
 var date2 = "2013-09-14T16:22:33.527-07:00";
 var date3 = "Sat Sep 14 2013 16:22:33 GMT-0700 (PDT)";

 $.format.toBrowserTimeZone(date1)
 $.format.toBrowserTimeZone(date2)
 $.format.toBrowserTimeZone(date3)
```

# Development

To compile jquery-dateFormat (generate dist files):
```
 $ grunt compile
```

## Testing

Tests are written using Jasmine. To run the test suite with PhantomJS, run `$ grunt test`. To run the test suite in your default browser, run `$ grunt test:browser`.

# Licenses

jquery-dateFormat is released under the [MIT License](http://opensource.org/licenses/MIT).

# Do you want to improve jquery-dateFormat

You're welcome to make your contributions and send them as a pull request.

## Contributors

Thanks to [all contributors](https://github.com/phstc/jquery-dateFormat/graphs/contributors).
