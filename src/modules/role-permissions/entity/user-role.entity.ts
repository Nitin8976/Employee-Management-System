import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { EmployeeEntity, IdentityEntity, PermissionEntity } from 'src/modules';
import { BaseEntity } from '../../common/entity/base.entity';

@Entity({ name: 'user_role' })
export class UserRoleEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    userRoleID: string;

    @Column({ name: 'title' })
    title: string;

    @Column({ name: 'description' })
    description: string;

    @OneToMany(() => IdentityEntity, user => user.role)
    users: IdentityEntity[];

    @OneToMany(() => EmployeeEntity, (employee) => employee.role) // Add this line
    employees: EmployeeEntity[];

    @ManyToMany(() => PermissionEntity, rolePermission => rolePermission.userRoles)
    @JoinTable()
    rolePermissions: PermissionEntity[];

    constructor(partial: Partial<UserRoleEntity>) {
        super();
        Object.assign(this, partial);
    }
}
