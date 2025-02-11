import AttributesJson from './Attributes.json' with {type: 'json'};
const StartFunc = () => {
    jFLocalToTableTag();
    jFPrepareColumns();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        sortName: 'Mobile',
        sortOrder: 'asc'
    });
};

const jFLocalToTableTag = () => {
    var $table = $('#table');

    $table.attr(AttributesJson.tableAttributes);
};

const jFPrepareColumns = () => {
    jFPrepareMobile();
    jFPrepareCustomerName();
    jFPrepareCity();

};

const jFPrepareMobile = () => {
    var $mobile = $('#MobileId');
    
    $mobile.attr(AttributesJson.coloumnAttributes.MobileAttributes);
    $mobile.addClass("d-none d-sm-table-cell");
};

const jFPrepareCustomerName = () => {
    var $CustomerName = $('#CustomerNameId');

    $CustomerName.attr(AttributesJson.coloumnAttributes.CustomerNameAttribute);
    $CustomerName.addClass("d-none d-sm-table-cell");
};

const jFPrepareCity = () => {
    var $City = $('#CityId');

    $City.attr(AttributesJson.coloumnAttributes.CityAttribute);
    $City.addClass("d-none d-sm-table-cell");
};

export { StartFunc };
