export default eventHandler(async () => {
  const lastMessage = await useStorage().getItem('lastMessage')
  return { lastMessage }
})
