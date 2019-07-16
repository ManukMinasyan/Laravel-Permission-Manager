/*
 *  Document   : be_tables_datatables.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Tables Datatables Page
 */

// DataTables, for more examples you can check out https://www.datatables.net/
class BeTableDatatables {
    /*
     * Override a few DataTable defaults
     *
     */
    static exDataTable() {
        jQuery.extend( jQuery.fn.dataTable.ext.classes, {
            sWrapper: "dataTables_wrapper dt-bootstrap4"
        });
    }

    /*
     * Init full DataTable
     *
     */
    static initDataTableFull() {
        jQuery('.js-dataTable-full').dataTable({
            columnDefs: [ { orderable: false, targets: [ 4 ] } ],
            pageLength: 8,
            lengthMenu: [[5, 8, 15, 20], [5, 8, 15, 20]],
            autoWidth: false
        });
    }

    /*
     * Init full extra DataTable
     *
     */
    static initDataTableFullPagination() {
        jQuery('.js-dataTable-full-pagination').dataTable({
            pagingType: "full_numbers",
            columnDefs: [ { orderable: false, targets: [ 4 ] } ],
            pageLength: 8,
            lengthMenu: [[5, 8, 15, 20], [5, 8, 15, 20]],
            autoWidth: false
        });
    }

    /*
     * Init simple DataTable
     *
     */
    static initDataTableSimple() {
        jQuery('.js-dataTable-simple').dataTable({
            columnDefs: [ { orderable: false, targets: [ 4 ] } ],
            pageLength: 8,
            lengthMenu: [[5, 8, 15, 20], [5, 8, 15, 20]],
            autoWidth: false,
            searching: false,
            oLanguage: {
                sLengthMenu: ""
            },
            dom: "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-6'i><'col-sm-6'p>>"
        });
    }

    /*
     * Init functionality
     *
     */
    static init() {
        this.exDataTable();
        this.initDataTableSimple();
        this.initDataTableFull();
        this.initDataTableFullPagination();
    }
}

// Initialize when page loads
jQuery(() => { BeTableDatatables.init(); });
