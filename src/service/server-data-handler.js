
export default class ServerDataHandler {
    static _baseUrl = 'https://aviasales-test-api.kata.academy'
    static _lastSearchId

    static async init() {
        const response = await fetch(`${this._baseUrl}/search`)
        const json = await response.json()
        this._lastSearchId = json.searchId
    }

    static async getTickets() {
        if (!this._lastSearchId)
            await this.init()

        const data = await fetch(`${this._baseUrl}/tickets?searchId=${this._lastSearchId}`)
        const ok = data.ok
        
        return ok ? data : this.getTickets()
    }

    static buildImageUrl = (imageName) => `https://pics.avs.io/99/36/${imageName}.png`
}