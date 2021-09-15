import { Injectable } from '@nestjs/common';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TenantService } from 'src/tenant/tenant/tenant.service';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction) private transactionModel: typeof Transaction,
    private tenantService: TenantService,
  ) {}
  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionModel.create({
      ...createTransactionDto,
      account_id: this.tenantService.tenant.id,
    });
  }

  findAll() {
    return this.transactionModel.findAll({
      where: {
        account_id: this.tenantService.tenant.id,
      },
    });
  }
}
