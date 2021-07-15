
export const toQueryString = (payload) => {
  return Object.keys(payload).map(k => {
    return encodeURIComponent(k) + '=' + encodeURIComponent(payload[k])
  }).join('&')
}

export const toSearchPayload = (payload) => {
  const current = payload.current || 1
  const pageSize = payload.pageSize || 10
  delete payload.current
  delete payload.pageSize
  return {
    current,
    pageSize,
    filter: {...payload},
    // sort: {...payload},
  }
}
