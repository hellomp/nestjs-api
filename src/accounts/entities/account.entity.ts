import {
  Table,
  Model,
  PrimaryKey,
  Column,
  DataType,
  Default,
} from 'sequelize-typescript';

@Table({
  tableName: 'accounts',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Account extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    allowNull: false,
  })
  name: string;

  @Default(0)
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  balance: string;

  @Column({
    allowNull: false,
  })
  subdomain: string;
}
