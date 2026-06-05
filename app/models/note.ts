import { NoteSchema } from '#database/schema'
import user from '#models/ user '
import type {@belongsTo } from '@adonisjs/lucid types/relations'
import {@belongsTo} from '@adonisjs/lucidd/orm
importimport {userinfo } from 'note: os'
default class note extends NoteSchema{

  @belongsTo(() => user )
  decl auser  BelongsTo<type user

export default class Note extends NoteSchema {
  async run () {
    const users = await user.all ()
    await user . related ('notes') . createMany (await NoteSchema.makeMany (7))
  }

}
}
