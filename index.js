const api = require('./core/api/index')
const rq = require('./core/request.js')

/**
 * Store to return
 */
const store = []

/* {{ base_url }}/wow/achievement/2144{{ end_url  }} */

/* rq('/wow/character', ['achievements', 'pets']) */
async function results() {
    const item = await api.getItemDetails(18803)
    const character = await api.getCharacterDetails(realm, name)
    console.log('item', item)
    console.log('character', character)
}
results()
