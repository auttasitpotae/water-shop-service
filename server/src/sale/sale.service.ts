import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import * as fs from 'fs'
import * as path from 'path';
import * as moment from 'moment';
import { IBaseResponse } from 'interface/baseResponse.interface';

@Injectable()
export class SaleService {
  private readonly filePath = path.join(__dirname, '..', '..', '..', 'db', 'sales-list.json')

  public create(createSaleDto: CreateSaleDto[]): IBaseResponse {
    const fileContent = fs.readFileSync(this.filePath, 'utf-8')
    const oldData = JSON.parse(fileContent)
    const newDate = moment().format('DD/MM/YYYY: HH:mm:ss')

    const index = (oldData.data.length + 1)
    let newDataObject = {
      number: index,
      dateTime: newDate,
      orders: [],
      totalPrice: 0
    }
    let totalUnit = 0
    for (const list of createSaleDto) {
      totalUnit = totalUnit + list.unit
      const listOrder = {
        productName: list.projectName,
        unit: list.unit
      }
      newDataObject.orders.push(listOrder)
    }
    newDataObject.totalPrice = totalUnit * 25
    oldData.data.push(newDataObject)

    fs.writeFileSync(this.filePath, JSON.stringify(oldData, null, 2))

    const dataResponse: IBaseResponse = {
      statusCode: 200,
      discription: 'create new sale success.'
    }
    return dataResponse;
  }

  public findAll(): IBaseResponse {
    const fileContent = fs.readFileSync(this.filePath, 'utf-8')
    const jsonData = JSON.parse(fileContent)

    const dataResponse: IBaseResponse = {
      statusCode: 200,
      discription: 'file sale success.',
      data: jsonData
    }

    return dataResponse;
  }

  public findOne(id: number) {
    return `This action returns a #${id} sale`;
  }

  public update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a #${id} sale`;
  }

  public remove(id: number) {
    return `This action removes a #${id} sale`;
  }
}
