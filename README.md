# wh-react-table
React component for a filterable and sortable table.

    <Table
      fields={[
        ['ID', i => i.id],
        ['Title', i => i.title]
      ]}
      data={this.state.data}
      filter={(item, value) => ReactDOMServer.renderToStaticMarkup(<Row item={item} />).toUpperCase().indexOf(value.toUpperCase()) > -1}
    >
      <Row />
    </Table>
