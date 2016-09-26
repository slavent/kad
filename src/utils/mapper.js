/**
 * @author Kozinets Svyatoslav
 */

/**
 * маппинг всех постов
 */
export function mapPosts( data ) {
    let newData = []

    _.filter( data, item => item.categories[ 0 ] === 2 ).map( ( item, i ) => {
        let data = _.pick( _.pick( item, "acf" ).acf, "title", "desc", "photo", "category" )
        data.id = item.id

        newData.push( data )
    } )

    return newData
}

/**
 * маппинг данных для раздела "Обо мне"
 */
export function mapAboutMe( data ) {
    return _.pick( _.pick( data, "acf" ).acf, "photo", "desc" )
}

/**
 * маппинг альбомов
 */
export function mapPhotos( data ) {
    let newData = []

    _.filter( data, item => item.categories[ 0 ] === 3 ).map( ( item, i ) => {
        let newItem = _.pick( item, "acf" ).acf
        newItem.id = item.id
        newData.push( newItem )
    } )

    return newData
}

/**
 * маппинг фотографий альбома
 */
export function mapPhotosByAlbumId( data, albumId ) {
    let albums = _.filter( data, item => item.categories[ 0 ] === 3 )
    let album = _.first( _.filter( albums, item => item.id == albumId ) )
    let albumMapped = _.pick( _.pick( album, "acf" ).acf, "photos" ).photos

    return albumMapped
}

/**
 * маппинг портфолио
 */
export function mapPortfolio( data ) {
    return _.pick( data, "acf" ).acf
}