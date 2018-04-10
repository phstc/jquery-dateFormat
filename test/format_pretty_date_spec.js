describe('#prettyDate', function () {
  it('formats properly', function () {
    var today = new Date();

    var daysago1 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    var daysago6 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6);
    var daysago7 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    var daysago8 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 8);
    var daysago13 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 13);
    var daysago14 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 14);
    var daysago15 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 15);
    var daysago20 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 20);
    var daysago21 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 21);
    var daysago27 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 27);
    var daysago28 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 28);
    var daysago29 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 29);
    var daysago30 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30);
    var daysago31 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 31);
    var daysago100 = new Date(today.getFullYear(), today.getMonth() - 4, today.getDate());

    // We need to count the hours, minutes, seconds and milliseconds here
    // to be correct: getHours() + 1 is just a shortcut for this
    var daysahead1 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, today.getHours() + 1);
    var daysahead4 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4, today.getHours() + 1);
    var daysahead7 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7, today.getHours() + 1);
    var daysahead8 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 8, today.getHours() + 1);
    var daysahead13 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 13, today.getHours() + 1);
    var daysahead14 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14, today.getHours() + 1);
    var daysahead15 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 15, today.getHours() + 1);
    var daysahead20 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 20, today.getHours() + 1);
    var daysahead21 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 21, today.getHours() + 1);
    var daysahead27 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 27, today.getHours() + 1);
    var daysahead28 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 28, today.getHours() + 1);
    var daysahead29 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 29, today.getHours() + 1);
    var daysahead30 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30, today.getHours() + 1);
    var daysahead31 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 31, today.getHours() + 1);
    var daysahead100 = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate(), today.getHours() + 1);

    expect($.format.prettyDate(today)).toEqual('just now');
    expect($.format.prettyDate(today.toString())).toEqual('just now');
    expect($.format.prettyDate(today.getTime())).toEqual('just now');

    expect($.format.prettyDate(today.getTime() + 500)).toEqual('in a moment');

    expect($.format.prettyDate(daysago1)).toEqual('Yesterday');
    expect($.format.prettyDate(daysago6)).toEqual('6 days ago');
    expect($.format.prettyDate(daysago7)).toEqual('1 week ago');
    expect($.format.prettyDate(daysago8)).toEqual('2 weeks ago');
    expect($.format.prettyDate(daysago13)).toEqual('2 weeks ago');
    expect($.format.prettyDate(daysago14)).toEqual('2 weeks ago');
    expect($.format.prettyDate(daysago15)).toEqual('3 weeks ago');
    expect($.format.prettyDate(daysago20)).toEqual('3 weeks ago');
    expect($.format.prettyDate(daysago21)).toEqual('3 weeks ago');
    expect($.format.prettyDate(daysago27)).toEqual('4 weeks ago');
    expect($.format.prettyDate(daysago28)).toEqual('4 weeks ago');
    expect($.format.prettyDate(daysago29)).toEqual('5 weeks ago');
    expect($.format.prettyDate(daysago30)).toEqual('5 weeks ago');
    expect($.format.prettyDate(daysago31)).toEqual('1 month ago');
    expect($.format.prettyDate(daysago100)).toEqual('4 months ago');

    expect($.format.prettyDate(daysahead1)).toEqual('Tomorrow');
    expect($.format.prettyDate(daysahead4)).toEqual('4 days from now');
    expect($.format.prettyDate(daysahead7)).toEqual('1 week from now');
    expect($.format.prettyDate(daysahead8)).toEqual('2 weeks from now');
    expect($.format.prettyDate(daysahead13)).toEqual('2 weeks from now');
    expect($.format.prettyDate(daysahead14)).toEqual('2 weeks from now');
    expect($.format.prettyDate(daysahead15)).toEqual('3 weeks from now');
    expect($.format.prettyDate(daysahead20)).toEqual('3 weeks from now');
    expect($.format.prettyDate(daysahead21)).toEqual('3 weeks from now');
    expect($.format.prettyDate(daysahead27)).toEqual('4 weeks from now');
    expect($.format.prettyDate(daysahead28)).toEqual('4 weeks from now');
    expect($.format.prettyDate(daysahead29)).toEqual('5 weeks from now');
    expect($.format.prettyDate(daysahead30)).toEqual('5 weeks from now');
    expect($.format.prettyDate(daysahead31)).toEqual('1 month from now');
    expect($.format.prettyDate(daysahead100)).toEqual('3 months from now');
  });

  it('formats other formats', function () {
    var today = new Date();
    var yearsago = new Date(today.getFullYear(), today.getMonth() - 57, today.getDate());

    var isoDateFormat = yearsago.toISOString();// e.g. '2013-07-14T23:22:33Z';
    var jaxbDateFormat = $.format.date(yearsago, 'yyyy-MM-ddTHH:mm:ss.SSS-07:00'); //e.g. '2013-07-14T16:22:33.527-07:00';
    var unixDateFormat = yearsago.toString(); // e.g. 'Sat Jul 14 2013 16:22:33 GMT-0700 (PDT)';

    expect($.format.prettyDate(isoDateFormat)).toEqual('4 years and 9 months ago');
    expect($.format.prettyDate(jaxbDateFormat)).toEqual('4 years and 9 months ago');
    expect($.format.prettyDate(unixDateFormat)).toEqual('4 years and 9 months ago');
  });
});

