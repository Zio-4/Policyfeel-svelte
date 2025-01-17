import type { PageServerLoad } from './$types'
import prisma from '$lib/db/db'

export const load: PageServerLoad = async () => {

    const bills = await prisma.BillFederal.findMany()
    console.log('bills: ', bills)

    return { bills: bills ?? [] }
}
