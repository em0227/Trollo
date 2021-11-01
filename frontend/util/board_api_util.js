
fetchAllBoards = (userId) => 
$.ajax({
    method: 'GET',
    url: `api/user/${userId}/boards`
})

fetchBoard = (boardId) =>
$.ajax({
    method: 'GET',
    url: `api/boards/${boardId}`
})

createBoard = (board) =>
$.ajax({
    method: 'POST',
    url: `api/boards/`,
    data: { board }
})

updateBoard = (board) =>
$.ajax({
    method: 'PATCH',
    url: `api/boards/${board.id}`,
    data: { board }
})

deleteBoard = (boardId) => 
$.ajax({
    method: 'DELETE',
    url: `api/boards/${boardId}`
})