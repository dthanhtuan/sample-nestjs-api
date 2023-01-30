import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// Once imported into any module, a global-scoped module will be visible in all modules.
// Thereafter, modules that wish to inject a service exported from a global module
// do not need to import the provider module.
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // other modules can use PrismaService
})
export class PrismaModule {}
