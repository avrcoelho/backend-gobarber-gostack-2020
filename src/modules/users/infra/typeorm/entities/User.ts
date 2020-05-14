import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
// Exclude: excluir campo da nossa classe. Quando for pro frontend, o campo não vai existir
// Expose: export um infromação que não existe para dentro da classe
import { Exclude, Expose } from 'class-transformer';

@Entity('user')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'avatar_url' })
  getAvatarUrl(): string | null {
    return this.avatar
      ? `${process.env.APP_API_URL}/files/${this.avatar}`
      : null;
  }
}

export default User;
