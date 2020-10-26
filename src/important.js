//! General
{


    Api_key = "137436a3a883e2b94597a24e32d9d6b8";
    item_image = `https://image.tmdb.org/t/p/w500${poster_path}`


    search_query = `https://api.themoviedb.org/3/search/${item_type}?api_key=${api_key}&query${item_name}&page=${page_no}`
    detail_query = `https://api.themoviedb.org/3/${item_type}/${item_id}?api_key=${api_key}`
    append_to_response = () => {
        //* can append any response to the current one (the detail method)
        `https://api.themoviedb.org/3/movie/157336?api_key=${api_key}`

        `https://api.themoviedb.org/3/movie/157336?api_key=${api_key}&append_to_response=videos,images`
    }

    get_credits = `https://api.themoviedb.org/3/${item_type}/${item_id}/credits?api_key=${api_key}`

    get_images = `https://api.themoviedb.org/3/${item_type}/${item_id}/images?api_key=${api_key}`

    get_videos = `https://api.themoviedb.org/3/${item_type}/${item_id}/videos?api_key=${api_key}`

    get_recommendations = `https://api.themoviedb.org/3/${item_type}/${item_id}/recommendations?api_key=${api_key}&page=${page_no}`

    get_similar = `https://api.themoviedb.org/3/${item_type}/${item_id}/similar?api_key=${api_key}&page=${page_no}`

    get_person_credits = `https://api.themoviedb.org/3/person/${person_id}/combined_credits?api_key=${api_key}`

    //!=======================================================================================================================

    // get_latest = `https://api.themoviedb.org/3/${item_type}/latest?api_key=${api_key}&page=${page_no}`

    get_popular = `https://api.themoviedb.org/3/${item_type}/popular?api_key=${api_key}&page=${page_no}`

    get_top_rated = `https://api.themoviedb.org/3/${item_type}/top_rated?api_key=${api_key}&page=${page_no}`

    get_upcoming = `https://api.themoviedb.org/3/${item_type}/upcoming?api_key=${api_key}&page=${page_no}`


    get_trending = `https://api.themoviedb.org/3/trending/${media_type(all||movie||tv||person)}/${time(day||week)}?api_key=${api_key}&page=${page_no}`

    {
        discover_query = `https://api.themoviedb.org/3/discover/${item_type}?api_key=${api_key}&page=${page_no}&sort_by${sort_method}`
        //* Also note that a number of filters support being comma (,) or pipe (|) separated. Comma's are treated like an AND and query while pipe's are an OR.

        sort_methods = "popularity.asc, popularity.desc, release_date.asc, release_date.desc, revenue.asc, revenue.desc, primary_release_date.asc, primary_release_date.desc, original_title.asc, original_title.desc, vote_average.asc, vote_average.desc, vote_count.asc, vote_count.desc default: popularity.desc"
    }

}