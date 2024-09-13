function getPagination(req, count, limit, page) {
  const pagination = {};
  const link = {};
  const path = `${req.protocol}://${req.get("host")}${req.baseUrl}`;

  if (count - limit * page <= 0) {
    link.next = "";
    if (page - 1 <= 0) {
      link.prev = "";
    } else {
      link.prev = `${path}?page=${page - 1}&limit=${limit}`;
    }
  } else {
    link.next = `${path}?page=${page + 1}&limit=${limit}`;
    if (page - 1 <= 0) {
      link.prev = "";
    } else {
      link.prev = `${path}?page=${page - 1}&limit=${limit}`;
    }
  }

  pagination.links = link;
  pagination.totalItems = count;

  return pagination;
}
