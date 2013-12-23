describe('#prettyDate', function() {
  it('formats properly', function() {
    var today      = new Date();
    var daysago1   = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    var daysago6   = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6);
    var daysago7   = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    var daysago8   = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 8);
    var daysago13  = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 13);
    var daysago14  = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 14);
    var daysago15  = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 15);
    var daysago20  = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 20);
    var daysago21  = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 21);
    var daysago22  = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 22);
    var daysago27  = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 27);
    var daysago28  = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 28);
    var daysago29  = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 29);
    var daysago30  = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30);
    var daysago31  = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 31);
    var daysago100 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 100);

    expect($.format.prettyDate(today)).toEqual('just now');
    expect($.format.prettyDate(today.toString())).toEqual('just now');
    expect($.format.prettyDate(today.getTime())).toEqual('just now');

    expect($.format.prettyDate(daysago1)).toEqual('Yesterday');
    expect($.format.prettyDate(daysago6)).toEqual('6 days ago');
    expect($.format.prettyDate(daysago7)).toEqual('1 weeks ago');
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
    expect($.format.prettyDate(daysago31)).toEqual('more than 5 weeks ago');
    expect($.format.prettyDate(daysago100)).toEqual('more than 5 weeks ago');
  });

  it('formats other formats', function() {
    var isoDateFormat  = '2013-07-14T23:22:33Z';
    var jaxbDateFormat = '2013-07-14T16:22:33.527-07:00';
    var unixDateFormat = 'Sat Jul 14 2013 16:22:33 GMT-0700 (PDT)';

    expect($.format.prettyDate(isoDateFormat)).toEqual('more than 5 weeks ago');
    expect($.format.prettyDate(jaxbDateFormat)).toEqual('more than 5 weeks ago');
    expect($.format.prettyDate(unixDateFormat)).toEqual('more than 5 weeks ago');
  });
});

