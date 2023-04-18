// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {db} from "@/utils/db.server";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const method = req.method;
  switch (method){
    case 'GET':
      await showCustomer(req, res)
          break;
    case 'POST':
      await createCustomer(req, res)
          break;
    case 'DELETE':
      await deleteCustomer(req, res)
          break;
    case 'PUT':
      await editCustomer(req, res)
          break;
  }
  res.status(200).json({ name: customer })
}

async function editCustomer(
    req: NextApiRequest,
    res: NextApiResponse<Data>
)
{

}


async function createCustomer(
    req: NextApiRequest,
    res: NextApiResponse<Data>
)
{
  const customer = await db.Customer.create({
    data: {
      'email': req.body.email,
      'phone': req.body.phone
    }
  })
  return res.status(200).json({customer})
}


async function deleteCustomer(
    req: NextApiRequest,
    res: NextApiResponse<Data>
)
{

}

async function showCustomer(
    req: NextApiRequest,
    res: NextApiResponse<Data>
)
{

}