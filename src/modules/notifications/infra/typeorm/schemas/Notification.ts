import {
  ObjectID,
  ObjectIdColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('notifications')
class Notifications {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  content: string;

  @Column('uuid')
  recipiend_id: string;

  @Column({ default: false })
  read: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Notifications;
