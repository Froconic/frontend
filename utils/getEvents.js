export default async ($content, params, error) => {
  const currentPage = parseInt(params.page);

  const perPage = 6;

  const allEvents = await $content("events").fetch();

  const totalEvents = allEvents.length;

  // use Math.ceil to round up to the nearest whole number
  const lastPage = Math.ceil(totalEvents / perPage);

  // use the % (modulus) operator to get a whole remainder
  const lastPageCount = totalEvents % perPage;

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0;
    }
    if (currentPage === lastPage) {
      return totalEvents - lastPageCount;
    }
    return (currentPage - 1) * perPage;
  };

  const paginatedEvents = await $content("events")
    .only(["title", "description", "cover", "slug", "location", "time", "date", "details", "category"])
    .sortBy("order", "desc")
    .limit(perPage)
    .skip(skipNumber())
    .fetch();

  if (currentPage === 0 || !paginatedEvents.length) {
    return error({ statusCode: 404, message: "No events found!" });
  }

  return {
    totalEvents,
    paginatedEvents,
  };

};