/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphcmsToken = process.env.GRAPHCMS_TOKEN

export default async function register(req, res) {
    console.log({ graphcmsToken })
    //destructure for easier use
    const { name, email, password } = req.body
    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${graphcmsToken}`
        }
    })

    //mutation query, update data or add data
    const query = gql`
  mutation CreateAuthor($name: String!, $email: String!, $password: String!) {
      createAuthor(data: {name: $name, email: $email, password: $password}) { id }
    }
  `
    try {
        //destructuring allows us to pass only req.body instead of req.body.name etc.
        const result = await graphQLClient.request(query, req.body)
        return res.status(200).send(result);
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }

}